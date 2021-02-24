import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Sizing } from "../styles/index";

const Home = ({ navigation }) => {
  return (
    <Layout style={Sizing.Screen}>
      <Text category="h1">HOME</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("NestedHome", { msg: "From Screen 1" })
        }
        style={styles.button}
      >
        <Text style={styles.buttonText}>Click Me!</Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontWeight: "700",
    fontSize: 30,
  },
  button: {
    backgroundColor: "#0275d8",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
});

export default Home;
