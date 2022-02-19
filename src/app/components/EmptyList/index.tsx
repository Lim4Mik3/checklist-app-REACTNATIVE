import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { EmptyListContainer, EmptyListTitle } from "./styles";
import checklistIMG from '../../assets/checklist.png';

export default function EmptyList(): JSX.Element {
  return (
    <EmptyListContainer>
      <Image source={checklistIMG} style={{ width: RFValue(160), height: RFValue(160)}} />
      <EmptyListTitle>
        Você não tem nenhum checklist ainda, crie um novo e ele aparecerá aqui.
      </EmptyListTitle>
    </EmptyListContainer>
  )
}