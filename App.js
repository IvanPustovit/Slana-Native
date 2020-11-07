import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Main from "./src/componets/Main";
import NavBar from "./src/componets/NavBar";

export default function App() {
  const [itemList, setItemList] = useState([]);
  const renderItem = ({ item }) => <Main item={item} />;

  useEffect(() => {
    fetch("https://slana.net.ua/api/get")
      .then((res) => res.json())
      .then((data) => setItemList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <NavBar style={styles.navbar} />

      <FlatList
        contentContainerStyle={styles.main}
        numColumns={2}
        horizontal={false}
        keyExtractor={(item) => item._id.toString()}
        data={itemList}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    height: 40,
  },
  main: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
