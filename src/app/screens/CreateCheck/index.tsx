import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import DropDownPicker from 'react-native-dropdown-picker'

import Button from "../../components/Button";
import Header from "../../components/Header";

import { 
  CreateCheckContainer,
  FormContainer,
  FormContainerTitle,
  FormWrapper,
  FormFooter,
  TwoColuns,
  FormOption,
  SupervisorTitle,
  FormGroup
} from './styles'
import ControlledInput from "../../components/Form/ControlledInput";
import { useState } from "react";
import ControlledSelect from "../../components/Form/ControlledSelect";
import { FlatList, ScrollView, Switch, VirtualizedList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checklist } from "../../services/dtos/Checklist.dtos";
import { CreateChecklistDTO, useChecklist } from "../../hooks/CheckListContext";
import { createCheckListSchema } from "../../utils/formValidators";
import { ValueType } from "react-native-dropdown-picker";

type FormData = {
  farmerName: string;
  farmName: string;
  farmCity: string;
  supervisorName: string;
  milkQuantity: string;
  cowsHeadQuantity: string;
}

DropDownPicker.setListMode("SCROLLVIEW");

export default function CreateCheck(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [hasSupervisor, setHasSupervisor] = useState(false);
  const [value, setValue] = useState<ValueType | null>(null);

  const { createCheckList } = useChecklist();
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(createCheckListSchema)
  });

  const onSubmit = async (data: any) => {
    let infos = data as FormData;

    if(!value) return;
    
    const _CHECKLIST: CreateChecklistDTO = {
      had_supervision: hasSupervisor,
      type: String(value),
      created_at: new Date().toISOString(),
      updated_at: '',
      amount_of_milk_produced: infos.milkQuantity,
      number_of_cows_head: infos.cowsHeadQuantity,
      farmer: {
        city: infos.farmCity,
        name: infos.farmName
      },
      from: {
        name: infos.farmerName,
      },
      to: {
        name: infos.supervisorName ? infos.supervisorName : '',
      },
    };

    createCheckList(_CHECKLIST);

    navigation.navigate('checklist/List');
  }

  return (
    <CreateCheckContainer>
      <Header title="Criar Checklist" />

      <FormContainer>
        <FormContainerTitle>Preencha o formulário</FormContainerTitle>

        <FormWrapper>

          <ControlledInput 
            control={control}
            errors={errors}
            inputLabel="Nome do fazendeiro"
            inputProps={{
              placeholder: 'Digite seu nome fazendeiro'
            }}
            name="farmerName"
          />

          <ControlledInput 
            control={control}
            errors={errors}
            inputLabel="Nome da fazenda"
            inputProps={{
              placeholder: 'Digite o nome da fazenda'
            }}
            name="farmName"
          />
          <ControlledInput 
            control={control}
            errors={errors}
            inputLabel="Cidade da fazenda"
            inputProps={{
              placeholder: 'Digite a cidade da Fazenda'
            }}
            name="farmCity"
          />
          <ControlledInput 
            control={control}
            errors={errors}
            inputLabel="Nome do supervisor"
            inputProps={{
              placeholder: 'Digite o nome do supervisor'
            }}
            name="supervisorName"
          />

          <ControlledSelect 
            open={open}
            value={String(value)}
            setOpen={setOpen}
            setValue={setValue}
            label="Selecione o tipo"
          />
          
          <TwoColuns>
            <FormOption>
              <ControlledInput 
                control={control}
                errors={errors}
                inputLabel="Qt. de leite"
                inputProps={{
                  placeholder: '0',
                  keyboardType: 'numeric'
                }}
                name="milkQuantity"
              />
            </FormOption>
            <FormOption>
              <ControlledInput 
                control={control}
                errors={errors}
                inputLabel="Qt. cabeca gado"
                inputProps={{
                  placeholder: '0',
                  keyboardType: 'numeric'
                }}
                name="cowsHeadQuantity"
              />
            </FormOption>
          </TwoColuns>

          <FormGroup>
            <SupervisorTitle>Houve supervisão?</SupervisorTitle>
            <Switch onValueChange={setHasSupervisor} value={hasSupervisor}/>
          </FormGroup>

          <FormFooter>
            <Button 
              onPress={() => navigation.navigate('checklist/List')}
              buttonType="SUCCESS"
            >
              Cancelar
            </Button>
            <Button 
              onPress={handleSubmit(onSubmit)}
              buttonType="CTA"
            >
              Criar
            </Button>
          </FormFooter>
        </FormWrapper>
      </FormContainer>
    </CreateCheckContainer>
  )
}