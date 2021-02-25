import React, { useState, useEffect } from "react";
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
const trashCan = (props) => <Icon {...props} name="trash-2-outline" />;

const AllergenList = () => {
  useEffect(() => {
    setInterval(function () {
      getData();
    }, 2000);
  }, []);

  const [data, setData] = useState([]);

  //const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("allergens");
      setData(jsonValue != null ? JSON.parse(jsonValue) : null);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
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
    if (data.includes(item)) {
      const newData = data.filter((e) => e !== item);
      storeData(newData);
    }
    getData();
  };

  const renderItem = () => {
    return data.map((item) => {
      return (
        <Layout key={item} style={styles.listItem}>
          <Text>{item}</Text>
          <Button
            size="tiny"
            appearance="ghost"
            style={styles.listButton}
            accessoryLeft={trashCan}
            onPress={() => {
              deleteItem(item);
            }}
          >
            Ta bort
          </Button>
        </Layout>
      );
    });
  };

  const test = () => {
    console.log(data);
  };

  return <Layout style={styles.allergenList}>{renderItem()}</Layout>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
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
  layout: {},
  button: {
    top: 12,
    position: "absolute",
    right: 8,
    height: 33,
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
  listButton: {
    height: 40,
  },
});

export default AllergenList;
