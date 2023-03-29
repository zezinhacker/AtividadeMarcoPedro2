import * as React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../utils/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin() {
    if (email === "" || password === "") {
      alert("Preencha todos os campos");
    } else {
      navigation.navigate("HomeScreen");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        Login
      </Button>
    </View>
  );
}
