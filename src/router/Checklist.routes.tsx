import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CreateCheck from '../app/screens/CreateCheck';
import DetailsCheck from '../app/screens/DetailsCheck';
import ListChecks from '../app/screens/ListChecklist';
import UpdateCheck from '../app/screens/UpdateCheck';

const Stack = createNativeStackNavigator();

export default function ChecklistRoutes(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName='checklist/List'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="checklist/List" component={ListChecks} />
      <Stack.Screen name="checklist/Create" component={CreateCheck} />
      <Stack.Screen name="checklist/Details" component={DetailsCheck} />
      <Stack.Screen name="checklist/Update" component={UpdateCheck} />
    </Stack.Navigator>
  )
}