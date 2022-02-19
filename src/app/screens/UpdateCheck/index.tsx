import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ControlledInput from "../../components/Form/ControlledInput";
import Header from "../../components/Header";
import { FormContainer, FormContainerTitle, FormFooter, FormOption, FormWrapper, TwoColuns } from "../CreateCheck/styles";
import { UpdateCheckContainer } from "./styles";
import Button from "../../components/Button";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Checklist } from "../../services/dtos/Checklist.dtos";
import { updateCheckListSchema } from "../../utils/formValidators";
import { useChecklist } from "../../hooks/CheckListContext";

export interface EditChecklistObject {
  id:               string;
  cowsHeadQuantity: string;
  farmCity:         string;
  farmName:         string;
  farmerName:       string;
  milkQuantity:     string;
  supervisorName:   string;
}

interface UpdateCheckProps {
  route: RouteProp<{ data: { data: Checklist } }, 'data'>
}

export default function UpdateCheck({ route }: UpdateCheckProps): JSX.Element {
  const navigator = useNavigation();
  const { data: item } = route.params;

  const { editChecklist } = useChecklist();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(updateCheckListSchema),
  });

  const onSubmit = (obj: any) => {
    const data = obj as EditChecklistObject;

    Object.assign(data, {
      ...data,
      id: item.id
    })

    editChecklist(data);

    navigator.navigate('checklist/List');
  }
  
  return (
    <UpdateCheckContainer>
      <Header title="Atualizar Checklist" />

      <FormContainer>
        <FormContainerTitle>Edite o formulário</FormContainerTitle>

        <FormWrapper>

          <ControlledInput
            control={control}
            errors={errors}
            defaultValue={item.from.name}
            inputLabel="Nome do fazendeiro"
            inputProps={{
              placeholder: 'Digite seu nome fazendeiro'
            }}
            name="farmerName"
          />

          <ControlledInput 
            control={control}
            errors={errors}
            defaultValue={item.farmer.name}
            inputLabel="Nome da fazenda"
            inputProps={{
              placeholder: 'Digite o nome da fazenda'
            }}
            name="farmName"
          />
          <ControlledInput 
            control={control}
            errors={errors}
            defaultValue={item.farmer.city}
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
            defaultValue={item.to.name}
            inputProps={{
              placeholder: 'Digite o nome do supervisor'
            }}
            name="supervisorName"
          />

          <TwoColuns>
            <FormOption>
              <ControlledInput 
                control={control}
                errors={errors}
                inputLabel="Qt. de leite"
                defaultValue={item.amount_of_milk_produced}
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
                defaultValue={item.number_of_cows_head}
                inputProps={{
                  placeholder: '0',
                  keyboardType: 'numeric'
                }}
                name="cowsHeadQuantity"
              />
            </FormOption>
          </TwoColuns>

          <FormFooter>
            <Button
              buttonType="AUX"
              onPress={() => navigator.goBack()}
            >Cancelar</Button>
            <Button
              buttonType="SUCCESS"
              onPress={handleSubmit(onSubmit)}
            >Salvar</Button>
          </FormFooter>
        </FormWrapper>
      </FormContainer>
    </UpdateCheckContainer>
  )
}