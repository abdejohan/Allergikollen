/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View,
  Linking,
  StatusBar,
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import {RNCamera} from "react-native-camera";

const App: () => React$Node = () => {
  return (
    <>
      <Text style={styles.gg}>ALLERGIKOLLEN</Text>
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{" "}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
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
