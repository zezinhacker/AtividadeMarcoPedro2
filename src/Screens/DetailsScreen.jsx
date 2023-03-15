import { Button, Text } from "react-native-paper";
import { View } from "react-native";
import styles from "../utils/styles";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Olá eu sou a Details Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Home
      </Button>
    </View>
  );
}
