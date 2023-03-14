import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function ContactScreen({ navigation }) {
    return (
        <View
            style={styles.container}>
            <Text>Sou a página de Contato</Text>
            <Button mode="elevated" onPress={() => {navigation.navigate("HomeScreen") }}>Home</Button>
            <Button mode="elevated" onPress={() => {navigation.navigate("AboutScreen") }}>About</Button>
            <Button mode="elevated" onPress={() => {navigation.navigate("LoginScreen") }}>Login</Button>

        </View>
    )
}
