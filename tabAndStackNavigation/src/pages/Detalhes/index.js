import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";

function Detalhes() {
  const navigation = useNavigation();

  const handleHome = () => {
    {
      /* despachar a ação de voltar ao inicio (pagina home) */
    }
    navigation.dispatch(StackActions.popToTop());
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detalhes Screen</Text>
      <Button title="Inicio" onPress={handleHome} />
    </View>
  );
}

export default Detalhes;
