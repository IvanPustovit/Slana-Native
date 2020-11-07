import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default NavBar;
