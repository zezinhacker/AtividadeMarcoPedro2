import * as React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>About Tela</Text>
      <Button
        mode="contained"
        onPress={() => {
          NavigationPreloadManager.navigate("HomeScreen");
        }}
      >
        Home
      </Button>
    </View>
  );
}
