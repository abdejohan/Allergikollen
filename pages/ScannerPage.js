import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

// components
import AllergenList from "../components/AllergenList";

const IntroPage = ({ navigation }) => {
  return (
    <Layout style={styles.layout}>
      <Text category="h1"> SCANNER PAGE </Text>
      <AllergenList />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("OpenScanner")}
      >
        Scanna
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
  },
  button: {
    position: "absolute",
    bottom: 20,
  },
});

export default IntroPage;
