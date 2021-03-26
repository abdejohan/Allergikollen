import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Text, Card, Icon, Button } from "@ui-kitten/components";
import { Sizing } from "../styles/index";

// components
import AllergenList from "../components/AllergenList";
import QrSearchManually from "../components/QrSearchManually";

// Icon for the "Scanna" Button
const CameraIcon = (props) => <Icon {...props} name="camera-outline" />;

const ScannerPage = ({ navigation }) => {

  const Header = (props) => (
    <View {...props}>
      <Text category="h2">Allergier</Text>
      <Text category="s1">Flaggar för:</Text>
    </View>
  );

  return (
    <Layout style={Sizing.Screen}>
      <Card style={{flex: 1}} header={Header}>
        <AllergenList />
      </Card>
      <View style={{paddingHorizontal: 20}}>
        <QrSearchManually />
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("OpenScanner")}
          accessoryRight={CameraIcon}
          >
          Scanna
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
});

export default ScannerPage;
