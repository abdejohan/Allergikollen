import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

const Home = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
  screen: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000025",
  },
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
