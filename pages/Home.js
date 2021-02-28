import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { Sizing } from "../styles/index";

const Home = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1 }}>
      <Layout style={styles.homeContainer}>
        <Layout style={styles.headerContainer}>
          <Text category="h1">Allergikollen</Text>
        </Layout>
        <Layout style={styles.somethingContainer}>
          <Text category="h1">Something!</Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "rgba(219,211,173, 0.3)",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  headerContainer: {
    flex: 2,
    backgroundColor: "rgba(219,211,173, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  somethingContainer: {
    flex: 3,
    backgroundColor: "rgba(219,211,173, 0.3)",
  },
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
