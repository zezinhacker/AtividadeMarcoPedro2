import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá eu sou a Home Screen</Text>
      <Button
        mode="elevated"
        onPress={() => {
          navigation.navigate("DetailsScreen");
        }}
      >
        Contato
      </Button>
      <br />
      <Button
        mode="elevated"
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        Login
      </Button>
      <br />
      <Button
        mode="elevated"
        onPress={() => {
          navigation.navigate("AboutScreen");
        }}
      >
        About
      </Button>
      <br />
      <Button
        mode="contained"
        onmPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        Login
      </Button>
    </View>
  );
}
