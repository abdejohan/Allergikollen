import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Buttons } from "../styles/index";

const Report = ({ navigation }) => {
  return (
    <Layout level="2" style={Buttons.Screen}>
      <Text>HÄR ÄR REPORT SIDAN</Text>
      <Button
        style={Buttons.listButton}
        onPress={() => {
          alert("here");
        }}
      >
        <Text>HÄR ÄR REPORT SIDAN</Text>
      </Button>
    </Layout>
  );
};

export default Report;
