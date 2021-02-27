import React, { useState, useEffect } from "react";
import { Input, Button, Icon, Text, Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { Sizing } from "../styles/index";

import AsyncStorage from "@react-native-async-storage/async-storage";
const trashCan = (props) => <Icon {...props} name="trash-2-outline" />;

const Settings = () => {
  useEffect(() => {
    setInterval(function () {
      getData();
    }, 2000);
  }, []);
  const [newAllergen, setNewAllergen] = useState("");
  const [data, setData] = useState([]);

  const logger = () => {
    console.log(data);
  };
  const handleTextChange = (event) => {
    setNewAllergen(event);
  };
  const addNewAllergen = () => {
    if (newAllergen) {
      let newArray = data;
      newArray.push(newAllergen);
      storeData(newArray);
      setData(newArray);
    }
    setNewAllergen("");
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("allergens", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("allergens");
      setData(jsonValue != null ? JSON.parse(jsonValue) : null);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteAllergen = async (item) => {
    if (data.includes(item)) {
      let newArr = data.filter((e) => e !== item);
      storeData(newArr);
      setData(newArr);
    }
  };

  const showAllergen = () => {
    return data.map((item) => {
      return (
        <Layout key={item} style={styles.listItem}>
          <Text>{item}</Text>
          <Button
            size="tiny"
            appearance="ghost"
            style={styles.button}
            accessoryLeft={trashCan}
            onPress={() => {
              deleteAllergen(item);
            }}
          >
            Ta bort
          </Button>
        </Layout>
      );
    });
  };

  return (
    <Layout style={Sizing.Screen}>
      <Text category="h3">Välj allergi att övervaka</Text>
      <Text category="s1">
        I Listan nedan bör du lista de allergier som du vill att scannern ska ha
        ett extra öga över.
      </Text>

      <Layout style={styles.allergenList}>
        {data[0] !== undefined ? (
          showAllergen()
        ) : (
          <Text>Du har inga allergier valda än..</Text>
        )}
      </Layout>
      <Layout style={styles.searchBarContainer}>
        <Input
          style={styles.input}
          caption="finns inte din allergi? klicka här"
          value={newAllergen}
          onChangeText={(event) => handleTextChange(event)}
          placeholder="Sök.."
        ></Input>
        <Button
          style={styles.button}
          appearance="outline"
          size="tiny"
          onPress={() => addNewAllergen(newAllergen)}
        >
          Lägg till
        </Button>
        <Button
          style={styles.button}
          appearance="outline"
          size="tiny"
          onPress={() => logger()}
        >
          Console
        </Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  allergenList: {
    minWidth: 250,
    minHeight: 250,
    marginTop: 50,
    color: "green",
    borderWidth: 2,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(219,211,173, 0.3)",
    borderColor: "rgba(219,211,173, 0.2)",
    borderRadius: 10,
    padding: 20,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    width: 200,
    paddingLeft: 10,
    borderRadius: 10,
  },
  searchBarContainer: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    height: 40,
  },
  input: {},
});
export default Settings;
