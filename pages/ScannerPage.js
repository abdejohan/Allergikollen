import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";
import { Sizing } from "../styles/index";

// components
import AllergenList from "../components/AllergenList";
import QrSearchManually from "../components/QrSearchManually";

// Icon for the "Scanna" Button
const CameraIcon = (props) => <Icon {...props} name="camera-outline" />;

const ScannerPage = ({ navigation }) => {
  return (
    <Layout style={Sizing.Screen}>
      <AllergenList />
      <QrSearchManually />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("OpenScanner")}
        accessoryRight={CameraIcon}
      >
        Scanna
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
});

export default ScannerPage;
