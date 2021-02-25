import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";
import { Sizing } from "../styles/index";

// components
import AllergenList from "../components/AllergenList";
import QrSearchManually from "../components/QrSearchManually";

const CameraIcon = (props) => <Icon {...props} name="camera-outline" />;

const IntroPage = ({ navigation }) => {
  return (
    <Layout style={Sizing.Screen}>
      <Text style={styles.listHeader} status="warning" category="h6">
        Vi säger till om produkten innehåller:{" "}
      </Text>
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
  listHeader: {
    padding: 20,
  },
  button: {
    marginBottom: 20,
  },
});

export default IntroPage;
