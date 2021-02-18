import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const IntroPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> SCANNER PAGE </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("OpenScanner")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  button: {
    backgroundColor: "#0275d8",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default IntroPage;
