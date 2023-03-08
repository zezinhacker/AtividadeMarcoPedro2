import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function AboutScreen({ navigation }) {
    return (
        <View
            style={styles.container}>
            <Text>Sou a página de About</Text>
            <Button mode="elevated" onPress={() => {navigation.navigate("HomeScreen") }}>Home</Button>
            <Button mode="elevated" onPress={() => {navigation.navigate("ContatoScreen") }}>Contato</Button>

        </View>
    )
}