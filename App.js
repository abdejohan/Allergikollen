/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

const App: () => React$Node = () => {
  return (
    <>
      <Text style={styles.gg}>hello</Text>
    </>
  );
};

const styles = StyleSheet.create({
  gg: {
    color: "green",
    fontSize: 32,
    fontWeight: "900",
  },
});

export default App;
