import { RouteProp, useNavigation } from "@react-navigation/native";
import { Checklist } from "../../services/dtos/Checklist.dtos";
import Button from "../../components/Button";
import Header from "../../components/Header";

import { 
  DetailsCheckContainer, 
  DetailsWrapper,
  Divider,
  InfoGroup,
  InfoText,
  InfoItem,
  SubInfoGroup,
  SubInfoText,
  Footer
} from "./styles";

interface Params {
  data: Checklist;
}

interface DetailsCheckProps {
  route: RouteProp<{ data: { data: Checklist } }, 'data'>
}

export default function DetailsCheck({ route }: DetailsCheckProps): JSX.Element {
  const navigator = useNavigation();
  const { data: item } = route.params;
  
  return (
    <DetailsCheckContainer>
      <Header title="Detalhes do checkList" />

      <DetailsWrapper>
        <InfoGroup>
          <InfoText>{item.farmer.name}</InfoText>
          <SubInfoText>{item.from.name} - Fazendeiro</SubInfoText>
        </InfoGroup>
        <Divider></Divider>
        <SubInfoGroup>
          <InfoItem>Tipo:</InfoItem>
          <SubInfoText>{item.type}</SubInfoText>
        </SubInfoGroup>
        <SubInfoGroup>
          <InfoItem>Quantidade de leite produzido:</InfoItem>
          <SubInfoText>{item.amount_of_milk_produced} litros</SubInfoText>
        </SubInfoGroup>
        <SubInfoGroup>
          <InfoItem>Quantidade cabeças de gado:</InfoItem>
          <SubInfoText>{item.number_of_cows_head} cabeças</SubInfoText>
        </SubInfoGroup>
        <SubInfoGroup>
          <InfoItem>Supervisionado:</InfoItem>
          <SubInfoText>{item.had_supervision ? 'Sim': 'Não'}</SubInfoText>
        </SubInfoGroup>
        {
          item.had_supervision && (
            <SubInfoGroup>
              <InfoItem>Supervisor:</InfoItem>
              <SubInfoText>{item.to.name}</SubInfoText>
            </SubInfoGroup>
          )
        }
        <SubInfoGroup>
          <InfoItem>Registro:</InfoItem>
          <SubInfoText>{item.created_at}</SubInfoText>
        </SubInfoGroup>
        <SubInfoGroup>
          <InfoItem>Atualização:</InfoItem>
          <SubInfoText>
            {item.updated_at.trim() ? item.updated_at : 'Ainda não atualizado'}
          </SubInfoText>
        </SubInfoGroup>

        <Footer>
          <Button
            buttonType="AUX"
            onPress={() => navigator.navigate('checklist/List')}
          >Voltar</Button>
          <Button
            buttonType="CTA"
            onPress={() => navigator.navigate('checklist/Update', {
              data: item
            })}
          >Editar</Button>
        </Footer>
      </DetailsWrapper> 
    </DetailsCheckContainer>
  )
}