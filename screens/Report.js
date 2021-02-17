import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Typography } from "../styles/index";

const Report = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.background_light}>
        {" "}
        This is Background light with header x10
      </Text>
      <Text style={styles.background_normal}>
        {" "}
        This is Background normal with header x20
      </Text>
      <Text style={styles.background_dark}>
        {" "}
        This is Background dark with header x40
      </Text>

      <Text style={styles.primary_light}>
        {" "}
        This is primary light with header x50
      </Text>
      <Text style={styles.primary_normal}>
        {" "}
        This is primary normal with header x60
      </Text>
      <Text style={styles.primary_dark}>
        {" "}
        This is primary dark with standard fontSize
      </Text>

      <Text style={styles.secondary_light}>
        {" "}
        This is secondary light with fontSize x10
      </Text>
      <Text style={styles.secondary_normal}>
        {" "}
        This is secondary normal with fontSize x20
      </Text>
      <Text style={styles.secondary_dark}>
        {" "}
        This is secondary dark with fontSize x30
      </Text>

      <Text style={styles.success}> Success with fontSize x40</Text>
      <Text style={styles.warning}> Warning with fontSize x50</Text>
      <Text style={styles.danger}> Danger with fontSize x60</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: Colors.primary.brand,
    flexDirection: "column",
    justifyContent: "center",
  },
  background_light: {
    ...Typography.header.x10,
    backgroundColor: Colors.background.light,
  },
  background_normal: {
    ...Typography.header.x20,
    backgroundColor: Colors.background.normal,
  },
  background_dark: {
    ...Typography.header.x40,
    backgroundColor: Colors.background.dark,
  },
  primary_light: {
    ...Typography.header.x50,
    backgroundColor: Colors.primary.light,
  },
  primary_normal: {
    ...Typography.header.x60,
    backgroundColor: Colors.primary.normal,
  },
  primary_dark: {
    backgroundColor: Colors.primary.dark,
  },
  secondary_light: {
    ...Typography.fontSize.x10,
    backgroundColor: Colors.secondary.light,
  },
  secondary_normal: {
    ...Typography.fontSize.x20,
    backgroundColor: Colors.secondary.normal,
  },
  secondary_dark: {
    ...Typography.fontSize.x30,
    backgroundColor: Colors.secondary.dark,
  },
  success: {
    ...Typography.fontSize.x40,
    backgroundColor: Colors.success.color,
  },
  warning: {
    ...Typography.fontSize.x50,
    backgroundColor: Colors.warning.color,
  },
  danger: {
    ...Typography.fontSize.x60,
    backgroundColor: Colors.danger.color,
    /*fontStyle: 38,*/
  },
});

export default Report;
