import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barCodeInfo, setBarCodeInfo] = useState(null);
  const [containsAllergen, setContainsAllergen] = useState([]);
  const [mayContain, setMayContain] = useState([]);

  let allergen = ["Vete", "gluten", "Sojabönor"];

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const fetchItemInfo = async (barCode) => {
    await fetch(
      `https://api.dabas.com/DABASService/V2/article/gtin/0${barCode}/JSON?&apikey=enterApiCodeHere`
    )
      .then((res) => res.json())
      .then((res) => {
        setBarCodeInfo(res);
        for (let y = 0; y < allergen.length; y++) {
          for (let i = 0; i < res.Allergener.length; i++) {
            if (
              res.Allergener[i].Allergen.toUpperCase().includes(
                allergen[y].toUpperCase()
              ) &&
              res.Allergener[i].Nivakod === "CONTAINS"
            ) {
              setContainsAllergen((containsAllergen) => [
                ...containsAllergen,
                allergen[y].toUpperCase(),
              ]);
            }
            if (
              res.Allergener[i].Allergen.toUpperCase().includes(
                allergen[y].toUpperCase()
              ) &&
              res.Allergener[i].Nivakod === "MAY_CONTAIN"
            ) {
              setMayContain((mayContain) => [
                ...mayContain,
                allergen[y].toUpperCase(),
              ]);
            }
          }
        }
      });
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    fetchItemInfo(data);
  };

  const scanAgain = () => {
    setScanned(false);
    setContainsAllergen([]);
  };

  const showAllergen = (arr) => {
    return arr.join(", ");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => scanAgain()} />
      )}
      {containsAllergen[0] && scanned && (
        <Text>This product contains {showAllergen(containsAllergen)}</Text>
      )}
      {mayContain[0] && scanned && (
        <Text>This product may contain {showAllergen(mayContain)}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  scanner: {
    width: 200,
    height: 200,
  },
});
