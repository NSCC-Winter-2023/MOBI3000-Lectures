
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import StarScreen from "./StarScreen";
import HelloScreen from "./HelloScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons";

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={StarScreen}
                    options={{
                      tabBarLabel: "Main",
                      tabBarIcon: ({focused, color, size}) =>
                        <FontAwesome name="home" size={32} color="green" />
                    }}/>
        <Tab.Screen name="Hello" component={HelloScreen}
                  options={{
                    tabBarIcon: ({color, size}) =>
                      <FontAwesome name="gear" size={size} color={color} />
                  }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

