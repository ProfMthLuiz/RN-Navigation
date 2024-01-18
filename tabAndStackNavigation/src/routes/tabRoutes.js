import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import StackRoutes from "./stackRoutes";

const Tab = createBottomTabNavigator();

function tabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome size={size} color={color} name="home" />;
          },
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome size={size} color={color} name="file-text" />;
          },
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome size={size} color={color} name="phone-call" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default tabRoutes;
