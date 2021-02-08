import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Scanner from "./components/Scanner";

export default function App() {
  const [mainView, setMainView] = useState();

  return (
    <View style={styles.container}>
      <Button title={"Tap to Scan"} onPress={() => setMainView("scanner")} />
      <Button title={"Tap to test"} onPress={() => setMainView("test")} />
      {mainView == "scanner" && <Scanner />}
      {mainView == "test" && alert("test")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
