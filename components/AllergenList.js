import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Icon,
  List,
  ListItem,
  Layout,
  Text,
} from "@ui-kitten/components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import { UserContext } from "../UserContext";
const trashCan = (props) => <Icon {...props} name="close-circle-outline" />;

const AllergenList = () => {
  useEffect(() => {
    getData();
  }, [value]);
  const { value, setValue } = useContext(UserContext);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("allergens")
        .then((res) => JSON.parse(res))
        .then((result) => {
          if (result != value) {
            setValue(result);
          }
        });

      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log(e);
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("allergens", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteItem = async (item) => {
    if (value.includes(item)) {
      const newData = value.filter((e) => e !== item);
      storeData(newData);
      setValue(newData);
    }
    getData();
  };

  const renderItem = () => {
    return value.map((item) => {
      return (
        <Layout key={item} style={styles.listItem}>
          <ListItem
            style={styles.listItem}
            title={item}
            children={
              <Button
                style={styles.button}
                size="small"
                accessoryRight={trashCan}
                onPress={() => {
                  deleteItem(item);
                }}
              >
                {item}
              </Button>
            }
          />
        </Layout>
      );
    });
  };

  return <Layout style={styles.allergenList}>{renderItem()}</Layout>;
};

const styles = StyleSheet.create({
  container2: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "rgba(50, 159, 91, 0.48)",
    borderRadius: 25,
    borderWidth: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
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
});

export default AllergenList;
