import React, { useState, useEffect } from "react";
import { ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Sizing } from "../styles/index";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/allergikollenbackground.jpeg")}
      style={styles.homeContainer}
    >
      <Text style={styles.headlineContainer} category="h1">
        Allergikollen
      </Text>
      <Text style={styles.messageContainer} category="h5">
        Välkommen till Allergikollen! Vi hjäper dig att hålla utkik efter ämnen
        du är allergisk mot.
      </Text>
      <Text style={styles.emptyContainer}></Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    // alignItems: "stretch",
  },
  headlineContainer: {
    flex: 4,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  messageContainer: {
    flex: 2,
    color: "white",
    backgroundColor: "rgba(0,0,0, 0.4)",
    padding: 20,
  },
  emptyContainer: {
    flex: 1,
    padding: 20,
  },
});

export default Home;
