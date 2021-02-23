import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Buttons, Sizing, Typography } from "../styles/index";

const Report = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <Text>HÄR ÄR REPORT SIDAN</Text>
      <Button
        style={Buttons.prim}
        onPress={() => {
          alert("here");
        }}
      >
        <Text>HÄR ÄR REPORT SIDAN</Text>
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default Report;
