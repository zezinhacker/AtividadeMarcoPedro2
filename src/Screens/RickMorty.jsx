import { Card, Paragraph, Title } from "react-native-paper";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function RickMorty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((dataJson) => setData(dataJson.results))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item) => (
          <Card style={styles.box} key={item.name}>
            <Card.Title title="Rick and Morty" styles={styles.box} />
            <Card.Content>
              <Title>{item.gender} </Title>
              <Paragraph>{item.status}</Paragraph>
            </Card.Content>
            <Card.Cover source={item.image} alt={item.name} />
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "70%",
  },
});
