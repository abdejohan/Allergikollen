import React, { useState, useEffect } from "react";
import { ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Sizing } from "../styles/index";

// const image = { uri: "../assets/allergikollenbackground.jpeg" };

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/allergikollenbackground.jpeg")}
      style={styles.homeContainer}
    >
      <Text style={styles.headerContainer} category="h1">
        Allergikollen
      </Text>
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
  headerContainer: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  // somethingContainer: {
  //   flex: 3,
  //   backgroundColor: "rgba(219,211,173, 0.3)",
  // },
  // text: {
  //   color: "#000",
  //   fontWeight: "700",
  //   fontSize: 30,
  // },
  // button: {
  //   backgroundColor: "#0275d8",
  //   paddingVertical: 5,
  //   paddingHorizontal: 10,
  // },
  // buttonText: {
  //   color: "#fff",
  //   fontSize: 25,
  // },
});

export default Home;
