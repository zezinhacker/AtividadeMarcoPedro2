import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá eu sou a Home Screen</Text>
    </View>
  );
}
