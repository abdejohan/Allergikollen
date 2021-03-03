import React, { useState, useEffect, useContext } from "react";
import {
  Input,
  Button,
  Icon,
  Text,
  Layout,
  ListItem,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { Sizing } from "../styles/index";
import { UserContext } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const trashCan = (props) => <Icon {...props} name="close-circle-outline" />;
const Settings = () => {
  const { value, setValue } = useContext(UserContext);
  const [newAllergen, setNewAllergen] = useState("");

  useEffect(() => {
    getData();
  }, [value]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("allergens");
      if (JSON.parse(jsonValue) === value) {
        setValue(jsonValue != null ? JSON.parse(jsonValue) : []);
      } else {
        return jsonValue != null ? JSON.parse(jsonValue) : [];
      }
    } catch (e) {
      console.log(e);
    }
  };
  const loggAsync = async () => {
    const test = await AsyncStorage.getItem("allergens")
      .then((res) => JSON.parse(res))
      .then((resss) => console.log(resss));
    return test;
  };

  const handleTextChange = (event) => {
    setNewAllergen(event);
  };

  const addNewAllergen = async () => {
    if (newAllergen) {
      // Den utkommenterade koden fungerar ej ???
      /* let newArray = value;
      newArray.push(newAllergen);*/
      let newArray = [...value, newAllergen];
      storeData(newArray);
      setValue(newArray);
    }
    setNewAllergen("");
  };

  const storeData = async (arr) => {
    try {
      const jsonValue = JSON.stringify(arr);
      await AsyncStorage.setItem("allergens", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteAllergen = async (item) => {
    if (value.includes(item)) {
      let newArr = value.filter((e) => e !== item);
      storeData(newArr);
      setValue(newArr);
    }
  };

  const showAllergen = () => {
    if (value.length) {
      return value.map((item) => {
        return (
          <Layout key={item} style={styles.listItem}>
            <ListItem
              style={styles.listItem}
              title={item}
              children={
                <Button
                  size="small"
                  style={styles.button}
                  accessoryRight={trashCan}
                  onPress={() => {
                    deleteAllergen(item);
                  }}
                >
                  {item}
                </Button>
              }
            />
          </Layout>
        );
      });
    }
  };

  return (
    <Layout style={Sizing.Screen}>
      <Text category="h3">Välj allergi att övervaka</Text>
      <Text category="s1">
        I Listan nedan bör du lista de allergier som du vill att scannern ska ha
        ett extra öga över.
      </Text>
      <Layout style={styles.allergenList}>
        {value[0] !== undefined ? (
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
          onPress={() => addNewAllergen()}
        >
          Lägg till
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
    backgroundColor: "rgba(50, 159, 91, 0.48)",
    height: 40,
  },
  input: {},
});
export default Settings;
