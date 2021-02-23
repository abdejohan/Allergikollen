import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

// components
import AllergenList from "../components/AllergenList";
import QrSearchManually from "../components/QrSearchManually";

const IntroPage = ({ navigation }) => {
  return (
    <Layout style={styles.layout}>
      <Text category="h1"> SCANNER PAGE </Text>
      <AllergenList />
      <QrSearchManually />
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
    marginBottom: 50,
  },
});

export default IntroPage;
