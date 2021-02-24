import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";

// components
import AllergenList from "../components/AllergenList";
import QrSearchManually from "../components/QrSearchManually";

const CameraIcon = (props) => <Icon {...props} name="camera-outline" />;

const IntroPage = ({ navigation }) => {
  return (
    <Layout style={styles.layout}>
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
  layout: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    paddingTop: 10,
  },
  listHeader: {
    padding: 20,
  },
  button: {
    marginBottom: 50,
  },
});

export default IntroPage;
