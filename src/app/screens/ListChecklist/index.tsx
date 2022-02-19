import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FlatList, Text } from "react-native";
import { Checklist } from "../../services/dtos/Checklist.dtos";
import Button from "../../components/Button";
import ChecklistCard from "../../components/ChecklistCard";
import EmptyList from "../../components/EmptyList";
import Header from "../../components/Header";
import { useChecklist } from "../../hooks/CheckListContext";

import { 
  ListChecksContainer, 
  ListContainer, 
  ListActions,
  ListWrapper,
} from "./styles";

export default function ListChecks(): JSX.Element {
  const { checklists, queryChecklist } = useChecklist();

  const navigator = useNavigation();

  useEffect(() => {
    queryChecklist();
  }, []);

  const onCardPress = (item: Checklist) => {
    navigator.navigate('checklist/Details', {
      data: item
    })
  }

  return (
    <ListChecksContainer>
      <Header title="CheckLists" />

      <ListContainer>
        <ListActions>
          <Text>{checklists.length} Checklists criados</Text>
          <Button
            buttonType="CTA"
            onPress={() => navigator.navigate('checklist/Create')}
          >Criar novo</Button>
        </ListActions>  

        <ListWrapper>
          <FlatList 
            data={checklists}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ChecklistCard item={item} onPress={() => onCardPress(item)} />
            )}
            ListEmptyComponent={EmptyList}
          />
        </ListWrapper>
      </ListContainer>

    </ListChecksContainer>
  )
}