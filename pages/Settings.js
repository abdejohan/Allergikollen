import React, { useState, useEffect, useContext } from "react";
import {
  Input,
  Button,
  Icon,
  Text,
  Layout,
  Card,
  ListItem,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { Sizing } from "../styles/index";
import { UserContext } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AllergenList from "../components/AllergenList";

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

  const Header = (props) => (
    <View {...props}>
      <Text category="h3">Välj allergi att övervaka</Text>
      <Text category="s1">
        I Listan nedan bör du lista de allergier som du vill att scannern ska ha
        ett extra öga över.
      </Text>
    </View>
  );
  
  const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      
    </View>
  );

  return (
    <Layout style={Sizing.Screen}>
      <Card style={{ flex: 1}} header={Header}>  
      <AllergenList />
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
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  allergenList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-end",
    bottom: 0,
  },
  button: {
    backgroundColor: "rgba(50, 159, 91, 0.48)",
    height: 40,
  },
  input: {
    flex: 1,
  },
});
export default Settings;
