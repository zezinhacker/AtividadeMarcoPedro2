import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../utils/styles";



export default function FetchNews () {
    const [ data, setData ] = useState([ ]);
    const [ nome, setNome ] = useState("Rafael");


    function fetchNewsData() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setSata(json))
        .catch((error) => console.error(error))
    }

useEffect(() => {
    fetchNewsData();
}, []);

return (
    <View style={styles.container}>
        <Text style={styles.title}>Fetch News</Text>
        <Text style={styles.subtitle}>Nome: {nome}</Text>
        <Text style={styles.subtitle}>Data: {data}</Text>
    </View>
);
}
