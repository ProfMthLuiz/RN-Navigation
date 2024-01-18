import React, { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

function Sobre() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === "" ? "Sobre" : route.params?.nome,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sobre Screen</Text>
      {/* Professor porque esse interrogação (?) */}
      {/* Porque, se por um acaso, algum eventual evento de força maior o email/propriedade que você  */}
      {/* esta "pegando" não vir o programa não ira crashar, a propriedade vai vir como vazia  */}
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Contato" onPress={() => navigation.navigate("Contato")} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

// function Sobre({ route }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Sobre Screen</Text>
//       {/* Professor porque esse interrogação (?) */}
//       {/* Porque, se por um acaso, algum eventual evento de força maior o email/propriedade que você  */}
//       {/* esta "pegando" não vir o programa não ira crashar, a propriedade vai vir como vazia  */}
//       <Text>{route.params?.nome}</Text>
//       <Text>{route.params?.email}</Text>
//     </View>
//   );
// }

export default Sobre;
