import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá eu sou a Login Screen</Text>
      <Button
        mode="elevated"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Home
      </Button>
    </View>
  );
}
