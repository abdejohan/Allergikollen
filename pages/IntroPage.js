import React from "react";
import { View, StyleSheet } from "react-native";
import { Sizing } from "../styles/index";
import { Layout, Spinner, Text } from "@ui-kitten/components";

const IntroPage = () => {
  return (
    <View style={styles.introContainer}>
      <Layout style={styles.stylingContainer}>
        <Text style={styles.emptyContainer}></Text>

        <Text style={styles.headlineContainer} category="h1">
          Allergikollen
        </Text>
        <Layout style={styles.spinnerContainer}>
          <Spinner status="basic" />
        </Layout>
        <Text style={styles.emptyContainer}></Text>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
  },
  stylingContainer: {
    flex: 1,
    color: "white",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headlineContainer: {
    flex: 1,
    color: "white",
  },
  spinnerContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  emptyContainer: {
    flex: 2,
  },
});

export default IntroPage;
