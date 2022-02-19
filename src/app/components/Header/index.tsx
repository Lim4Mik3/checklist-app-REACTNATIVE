import { HeaderContainer, HeaderTitle } from "./styles";

import { Feather } from '@expo/vector-icons'; 
import { View } from "react-native";
import { useChecklist } from "../../hooks/CheckListContext";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps): JSX.Element {
  const { isConnected } = useChecklist();

  return (
    <HeaderContainer>
      <HeaderTitle>
        {title}
      </HeaderTitle>
      {
        !isConnected && (
          <View style={{ position: 'absolute', right: 20, top: 55 }}>
            <Feather name="wifi-off" size={24} color="#DDD" />
          </View>
        )
      }
    </HeaderContainer>
  )
}