import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "./MainScreen";
import GoodbyeScreen from "./GoodbyeScreen";

const Stack = createNativeStackNavigator();

function StarScreen({navigation}) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="main" component={MainScreen} />
      <Stack.Screen name="goodbye" component={GoodbyeScreen} />
    </Stack.Navigator>
  )
}

export default StarScreen;