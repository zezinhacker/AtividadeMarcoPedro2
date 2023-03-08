import { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
   const [name, setName] = useState(20);

    <View style={styles.container}>
      <Text>Olá eu sou a Home Screen</Text>
      <Button mode="elevated"onPress={() => {navigation.navigate("AboutScreen");}}>
      <Button mode="elevated" onPress={() => {navigation.navigate("ContatoScreen") }}>Contato</Button>

        Sobre
      </Button>
    </View>
}
