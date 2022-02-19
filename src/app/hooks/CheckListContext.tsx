import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import netInfo from '@react-native-community/netinfo'
import uuid from 'react-native-uuid'
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { AppError } from '../errors/AppError';
import { EditChecklistObject } from '../screens/UpdateCheck';
import ChecklistService from '../services/ChecklistService';
import { Checklist, UpdateChecklist } from '../services/dtos/Checklist.dtos';

export type CreateChecklistDTO = Omit<Checklist, 'id'>;

interface ChecklistProviderProps {
  children: ReactNode;
};

interface ChecklistContextData {
  checklists: Checklist[];
  isConnected: boolean;
  createCheckList: (data: CreateChecklistDTO) => void;
  editChecklist: (data: EditChecklistObject) => void;
  queryChecklist: () => void;
}

const checklistService = new ChecklistService();

const ChecklistContext = createContext<ChecklistContextData>({} as ChecklistContextData);

function ChecklistProvider({ children }: ChecklistProviderProps): JSX.Element {
  const [checklists, setChecklists] = useState<Checklist[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // checklistService.clearDatabase();
  }, [])

  useEffect(() => {
    if (isConnected) {
      showMessage({
        message: 'Conexão estabelecida, sincronizando dados...',
        type: 'success'
      })
      checklistService.syncData();
      queryChecklist();
      return;
    }
  }, [isConnected])

  const editChecklist = async (data: EditChecklistObject) => {
    const updateChecklistObj: UpdateChecklist = {
      id: data.id,
      number_of_cows_head: Number(data.cowsHeadQuantity),
      farm_name: data.farmName,
      farm_city: data.farmCity,
      farmer_name: data.farmerName,
      amount_of_milk_produced: Number(data.milkQuantity),
      supervisor_name: data.supervisorName
    }

    try {
      await checklistService.update(updateChecklistObj, false);

      const result = await checklistService.getChecklists();

      setChecklists(result);

      if(isConnected) {
        checklistService.syncData();
      }

      return showMessage({
        message: 'Checklist atualizado com sucesso',
        type: 'success'
      })
    } catch (error) {
        if(error instanceof AppError) {
          showMessage({
            message: error.message,
            type: 'danger'
          })
        }
        return showMessage({
          message: 'Ocorreu um erro inesperado',
          type: 'danger'
        })
    }
  }

  const createCheckList = async (data: CreateChecklistDTO) => {  
    try {
      const updatedList = await checklistService.create({
        ...data,
        id: String(uuid.v4())
      }, false);

      setChecklists(updatedList);
      
      if(isConnected) {
        checklistService.syncData();
      }

      return showMessage({
        message: 'Checklist criado com sucesso',
        type: 'success'
      })

    } catch (error) {
      if(error instanceof AppError) {
        showMessage({
          message: error.message,
          type: 'danger'
        })
      }
      return showMessage({
        message: 'Ocorreu um erro inesperado',
        type: 'danger'
      })
    }
  }

  const queryChecklist = async () => {
    try {
      const checklistList = await checklistService.getChecklists();

      setChecklists(checklistList);
    } catch (error) {
      if(error instanceof AppError) {
        showMessage({
          message: error.message,
          type: 'danger'
        })
      }
      return showMessage({
        message: 'Ocorreu um erro inesperado',
        type: 'danger'
      })
    }
  }
  
  return (
    <ChecklistContext.Provider value={{ 
      checklists, 
      isConnected, 
      createCheckList, 
      editChecklist, 
      queryChecklist 
    }}>
      { children }
      <FlashMessage 
        position="top" 
        icon="auto"
        style={{ 
          alignItems: 'center', 
          justifyContent: 'center', 
          paddingTop: 40
        }} 
        titleStyle={{
          fontSize: 16,
        }}
      />
    </ChecklistContext.Provider>
  )
}

const useChecklist = () => useContext(ChecklistContext);

export { ChecklistProvider, useChecklist};