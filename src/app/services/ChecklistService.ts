import connectRealm from '../../infra/database/realm';
import { AppError } from '../errors/AppError';
import { api } from './API'
import { ActionType, Checklist, ChecklistRealmFormat, UpdateChecklist } from "./dtos/Checklist.dtos";

export default class ChecklistService {

  async create(item: Checklist, isConnected: boolean): Promise<Checklist[]> {
    const realm = await connectRealm();

    const checklistObject = this.realmChecklistFormat(item, isConnected, 'CREATED');

    try {
      realm.write(() => {
        realm.create("Checklist", checklistObject);
      })
      
      const list = realm.objects<ChecklistRealmFormat[]>("Checklist").sorted("created_at", true);
      const response = this.appChecklistFormat(list);
      
      realm.close();
      
      return response;
    } catch (error) {
      realm.close();
      throw new AppError('Tivemos um erro ao salvar o Checklist');
    }
  }

  async update(item: UpdateChecklist, isConnected: boolean) {
    const realm = await connectRealm();

    let checklist = realm.objectForPrimaryKey<ChecklistRealmFormat>("Checklist", item.id);
    
    realm.write(() => {
      Object.assign(checklist, {
        ...checklist,
        ...item,
        action_type: checklist?.is_sync === true ? 'EDITED' : 'CREATED',
        is_sync: false,
        updated_at: new Date().toISOString()
      });
    })

    return checklist;
  }

  async syncData() {
    const realm = await connectRealm();

    const unsyncChecklists = realm.objects<ChecklistRealmFormat>("Checklist")
      .filtered("is_sync = false");

    if (unsyncChecklists.length > 0) {
      for await (const element of unsyncChecklists) {
        const [ postObject ] = this.serverChecklistFormat([element]);
  
        if(element.action_type === 'CREATED') {
          try {
            await api.post('checklists', { ...postObject });
  
            realm.write(() => {
              let checklist = realm.objectForPrimaryKey<ChecklistRealmFormat>("Checklist", postObject.id);
  
              if (!checklist) return;
  
              checklist.action_type = "NONE";
              checklist.is_sync = true;
            })
          } catch (error) {
            throw new AppError('Tivemos um erro ao atualizar o checklist');
          }
        } else if (element.action_type === 'EDITED') {
          try {
            await api.patch(`checklists/${postObject.id}`, { ...postObject });
  
            realm.write(() => {
              let checklist = realm.objectForPrimaryKey<ChecklistRealmFormat>("Checklist", postObject.id);
  
              if (!checklist) return;
  
              checklist.action_type = "NONE";
              checklist.is_sync = true;
            })
          } catch (error) {
            throw new AppError('Tivemos um erro ao atualizar o checklist');
          }
        }
      }
    }

    const checklistsListLocal = realm.objects<ChecklistRealmFormat>("Checklist");

    let localChecklistIds = checklistsListLocal.map(item => item.id);

    try {
      const updatedListServer = await api.get<Checklist[]>('/checklists');

      const serverUnsubscribreList = updatedListServer.data
        .filter(item => !(localChecklistIds.includes(item.id)));

      for (const element of serverUnsubscribreList) {
        let checklist = this.realmChecklistFormat(element, true, 'NONE');

        realm.write(() => {
          realm.create("Checklist", checklist);
        })
      }
    } catch (error) {
      throw new AppError("Erro ao sincronizar os dados");
    }
  }

  async getChecklists() {
    const realm = await connectRealm();

    const list = realm.objects<ChecklistRealmFormat[]>("Checklist")
      .sorted("created_at", true)
      .sorted("updated_at", true);
    
    if (!(list.length > 0)) {
      return [];
    }

    const response = this.appChecklistFormat(list);

    return response;
  }

  async clearDatabase() {
    const realm = await connectRealm();

    realm.write(() => {
      realm.delete(realm.objects("Checklist"))
    })
  }

  private serverChecklistFormat(data: any): Checklist[] {
    const list = data as ChecklistRealmFormat[];

    return list.map((checklist) => ({
      id: checklist.id,
      farmer: {
        name: checklist.farm_name,
        city: checklist.farm_city
      },
      from: {
        name: checklist.farmer_name
      },
      to: {
        name: checklist.supervisor_name as string
      },
      type: checklist.type,
      amount_of_milk_produced: String(checklist.amount_of_milk_produced),
      number_of_cows_head: String(checklist.number_of_cows_head),
      had_supervision: checklist.had_supervision,
      created_at: checklist.created_at,
      updated_at: checklist.updated_at ? checklist.updated_at : '',
    }))
  }

  private appChecklistFormat(data: any): Checklist[] {
    const list = data as ChecklistRealmFormat[];

    const dateFormatter = (date: string) => new Intl
      .DateTimeFormat('pt-br', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' }).format(new Date(date));

    return list.map((checklist) => ({
      id: checklist.id,
      farmer: {
        name: checklist.farm_name,
        city: checklist.farm_city
      },
      from: {
        name: checklist.farmer_name
      },
      to: {
        name: checklist.supervisor_name as string
      },
      type: checklist.type,
      amount_of_milk_produced: String(checklist.amount_of_milk_produced),
      number_of_cows_head: String(checklist.number_of_cows_head),
      had_supervision: checklist.had_supervision,
      created_at: dateFormatter(checklist.created_at),
      updated_at: checklist.updated_at ? dateFormatter(checklist.updated_at): '',
      action_type: checklist.action_type,
      is_sync: checklist.is_sync
    }))
  }

  private realmChecklistFormat(
    item: Checklist, 
    isConnected: boolean, 
    action: ActionType): ChecklistRealmFormat {
    return {
      id: item.id,
      type: item.type,
      farm_name: item.farmer.name,
      farm_city: item.farmer.city,
      farmer_name: item.from.name,
      had_supervision: item.had_supervision,
      supervisor_name: item.to.name,
      is_sync: isConnected,
      action_type: action,
      number_of_cows_head: Number(item.number_of_cows_head),
      amount_of_milk_produced: Number(item.amount_of_milk_produced),
      created_at: new Date().toISOString(),
      updated_at: '',
    }
  }
}