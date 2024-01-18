import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./src/routes/tabRoutes";

function App() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

export default App;
