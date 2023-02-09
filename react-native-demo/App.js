
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import StarScreen from "./StarScreen";
import HelloScreen from "./HelloScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons";
import MainScreen from "./MainScreen";
import {useState} from "react";
import NameProvider from "./NameProvider";

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NameProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={MainScreen}
                      options={{
                        tabBarLabel: "Main",
                        tabBarIcon: ({focused, color, size}) =>
                          <FontAwesome name="home" size={size} color={color} />
                      }}/>
          <Tab.Screen name="Hello" component={HelloScreen}
                    options={{
                      tabBarIcon: ({color, size}) =>
                        <FontAwesome name="gear" size={size} color={color} />
                    }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </NameProvider>
  );
}

