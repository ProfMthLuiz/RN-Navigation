import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";

function Contato() {
  const navigation = useNavigation();

  const handleHome = () => {
    {
      /* despachar a ação de voltar ao inicio (pagina home) */
    }
    navigation.dispatch(StackActions.popToTop());
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contato Screen</Text>
      <Button title="Inicio" onPress={handleHome} />
    </View>
  );
}

export default Contato;
