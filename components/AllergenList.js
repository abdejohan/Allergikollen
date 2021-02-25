import React, { useState, useEffect } from "react";
import { Button, Icon, List, ListItem, Layout } from "@ui-kitten/components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";

/*const data = [
  {
    title: "Nötter",
    description: "Flaggar för: Jordnötter",
  },
  {
    title: "mejeriprodukter",
    description: "Flaggar för: Mjölk",
  },
  {
    title: "Soja",
    description: "Flaggar för: Soja, SojaBönor, SojaPulver",
  },
  {
    title: "Fisk",
    description: "Flaggar för: Fisk/Skaldjur",
  },
];*/

const AllergenList = () => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("allergens").then((res) => {
        setData(res != null ? JSON.parse(res).allergens : null);
      });

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteItem = async (item) => {
    if (data.includes(item)) {
      const newData = data.filter((e) => e !== item);
      try {
        await AsyncStorage.setItem("allergens", newData);
      } catch (e) {
        console.log(e);
      }
    }
  };
  const [data, setData] = useState([]);
  const [removeItem, setRemoveItem] = useState(null);

  const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <Layout>
      <ListItem
        style={styles.listItem}
        title={item}
        description={item.description}
        accessoryLeft={renderItemIcon}
      />
      <Button
        style={styles.button}
        onPress={() => {
          deleteItem(item);
        }}
      >
        Ta bort
      </Button>
    </Layout>
  );

  useEffect(() => {
    if (removeItem !== null) {
      data.splice(removeItem, 1);
      setRemoveItem(null);
    }
  }, [removeItem]);

  return <List style={styles.container} data={data} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  container: {
    minWidth: 330,
    flex: 1,
    borderColor: "black",
    //backgroundColor: "rgba(219,211,173, 0.1)",
    backgroundColor: "white",
  },
  listItem: {
    borderRadius: 10,
    width: 230,
    marginBottom: 2,
  },
  layout: {},
  button: {
    top: 12,
    position: "absolute",
    right: 8,
    height: 33,
  },
});

export default AllergenList;
