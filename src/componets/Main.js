import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const Main = ({ item }) => {
  //   console.log(item);
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.img }} style={styles.logo} />
      <Text>{item.category}</Text>
      <Text style={styles.name}>{item.name.toUpperCase()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 10,
    width: 160,
    textAlign: "center",
    // flexWrap: "wrap",
  },
  name: {
    flexWrap: "wrap",
    fontSize: 15,
    fontWeight: "bold",
  },
  logo: {
    width: 150,
    height: 200,
  },
});
export default Main;
