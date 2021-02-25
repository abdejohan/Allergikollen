import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Sizing } from "../styles/index";

const Home = ({ navigation }) => {
  return (
    <Layout style={Sizing.Screen}>
      <Text category="h1">HOME</Text>
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
