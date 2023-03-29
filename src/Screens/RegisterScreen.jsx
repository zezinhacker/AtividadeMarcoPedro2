import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { auth } from "../config/firebase";
import styles from "../utils/styles";

export default function RegisterScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função para registrar um usuário
  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Usuario criado com sucesso");
        Navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário");
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph>Realize seu Cadastro</Paragraph>
        <TextInput
          label={"E-mail"}
          placeholder={"Digite seu e-mail"}
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="flat"
        />
        <TextInput
          label={"Senha"}
          placeholder={"Digite sua senha"}
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
          mode="flat"
        />
        <Button onPress={handleRegister}>Registre-se</Button>
      </View>
    </View>
  );
}
