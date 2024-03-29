import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Contato from "./src/pages/Contato";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "ProjectTec",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#FFF",
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: "ProjectTec",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#FFF",
          }}
        />
        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{
            title: "ProjectTec",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#FFF",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
