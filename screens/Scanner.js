import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barCodeInfo, setBarCodeInfo] = useState(null);
  const [containsAllergen, setContainsAllergen] = useState([]);
  const [mayContain, setMayContain] = useState([]);

  const [newAllergen, setNewAllergen] = useState("");
  /*const [allergen, setAllergen] = useState([]);*/
  const allergen = props.selectedAllergens;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  /* this function loops over the allergen array and checks if any of the chosen allergens is included in the api response.
  If it is, the matching allergen is added to a new vaiable and displayed in the view. */
  const fetchItemInfo = async (barCode) => {
    await fetch(
      `https://api.dabas.com/DABASService/V2/article/gtin/0${barCode}/JSON?&apikey=enterApiKeyHere`
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
    if (arr[0]) {
      return arr.map((item) => {
        return (
          <Text key={item}>
            <MaterialIcons name="warning" size={24} color="red" /> {item}
          </Text>
        );
      });
    }
  };

  /* Add new allergen */
  const handleTextChange = (event) => {
    setNewAllergen(event);
  };
  const addNewAllergen = () => {
    if (!newAllergen) {
      return;
    }
    setAllergen((allergen) => [...allergen, newAllergen]);
    setNewAllergen("");
  };
  /* ***************** */

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {/*
      <TextInput
        style={{ backgroundColor: "grey", width: 100, height: 40 }}
        value={newAllergen}
        onChangeText={(event) => handleTextChange(event)}
      ></TextInput>
      <Button title="add" onPress={addNewAllergen}></Button>
      <Text>{showAllergen(allergen)}</Text>
      */}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scanner}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => scanAgain()} />
      )}
      {containsAllergen[0] && scanned && (
        <View>
          <Text>This product contains:</Text>
          <View style={{ display: "flex", flexDirection: "column" }}>
            {showAllergen(containsAllergen)}
          </View>
        </View>
      )}
      {mayContain[0] && scanned && (
        <View>
          <Text>This product may contain:</Text>
          <View style={{ display: "flex", flexDirection: "column" }}>
            {showAllergen(mayContain)}
          </View>
        </View>
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
