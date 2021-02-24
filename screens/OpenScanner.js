import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";
import { Sizing } from "../styles/index";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const qrSize = width * 0.7;

const OpenScanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("ProductScreen", { qrcode: data });
    setScanned(false);
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Layout style={Sizing.Screen}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <Text style={styles.description}>Scanna en produkt</Text>
        <Layout style={styles.qr}></Layout>
      </BarCodeScanner>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  qr: {
    borderWidth: 5,
    borderRadius: 10,
    borderColor: "white",
    marginTop: "20%",
    marginBottom: "20%",
    width: qrSize,
    height: qrSize - 80,
  },
  description: {
    fontSize: width * 0.09,
    marginTop: "10%",
    textAlign: "center",
    width: "70%",
    color: "white",
  },
  cancel: {
    fontSize: width * 0.05,
    textAlign: "center",
    width: "70%",
    color: "white",
  },
  button: {
    backgroundColor: "#0275d8",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
});

export default OpenScanner;
