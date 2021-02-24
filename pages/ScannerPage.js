import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

// components
import AllergenList from "../components/AllergenList";
import QrSearchManually from "../components/QrSearchManually";

const IntroPage = ({ navigation }) => {
  return (
    <Layout style={styles.layout}>
      <Text category="s2">Vi säger till om produkten innehåller: </Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    paddingTop: 10,
  },
  button: {
    marginBottom: 50,
  },
});

export default IntroPage;
