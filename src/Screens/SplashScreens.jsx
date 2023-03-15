import { ActivityIndicator, Text } from "react-native-paper";
import { View } from "react-native";
import styles from "../utils/styles";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("HomeScreen");
  }, 2000);

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color="#000" size="medium" />
      <Text>Calma ai Meu Consagrado</Text>
    </View>
  );
}
