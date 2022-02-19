import { Text, View } from "react-native";
import { Checklist } from "../../services/dtos/Checklist.dtos";

import {
  ChecklistContainer,
  CheckListBasicInfos,
  FarmName,
  FarmLocation,
  CheckListType,
  CheckListTypeText,
  CardFooter,
  CheckListStatus,
  FarmerName,
  CreationDate
} from "./styles";

interface ChecklistCardProps {
  item: Checklist;
  onPress: () => void;
}

export default function ChecklistCard({ item, onPress }: ChecklistCardProps) {
  return (
    <ChecklistContainer activeOpacity={0.5} onPress={onPress}>
      <CheckListBasicInfos>
        <View>
          <FarmName>{item.farmer.name}</FarmName>
          <FarmLocation>{item.farmer.city}</FarmLocation>
        </View>

        <View>
          <CheckListStatus>Salvo</CheckListStatus>
        </View>
      </CheckListBasicInfos>

      <CheckListType>
        <CheckListTypeText>{item.type}</CheckListTypeText>
      </CheckListType>

      <CardFooter>
        <CreationDate>{item.created_at}</CreationDate>
        <View>
          <Text>Fazendeiro</Text>
          <FarmerName>{item.from.name}</FarmerName>
        </View>
      </CardFooter>
    </ChecklistContainer>
  )
}