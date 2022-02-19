import { NavigationContainer } from "@react-navigation/native";
import ChecklistRoutes from "./Checklist.routes";

export default function Router(): JSX.Element {
  return (
    <NavigationContainer>
      <ChecklistRoutes />
    </NavigationContainer>
  )
}