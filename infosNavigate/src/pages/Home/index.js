import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();

  const navigationSobre = () => {
    navigation.navigate("Sobre", {
      nome: "Pelé",
      email: "pelezin@example.com",
    });
  };

  const navigationContato = () => {
    navigation.navigate("Contato");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Sobre" onPress={navigationSobre} />
      <Button title="Contato" onPress={navigationContato} />
    </View>
  );
}

export default Home;
