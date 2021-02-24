import React, { useState, useEffect } from "react";
import {
  Button,
  Icon,
  Divider,
  List,
  ListItem,
  Layout,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const data = [
  {
    title: "Nötter",
  },
  {
    title: "mejeriprodukter",
  },
  {
    title: "Soja",
  },
  {
    title: "Fisk",
  },
  {
    title: "Fisk",
  },
];

const AllergenList = () => {
  const [removeItem, setRemoveItem] = useState(null);

  const renderItem = ({ item, index }) => (
    <Layout style={styles.layout}>
      <ListItem
        style={styles.listItem}
        title={item.title}
        description={item.description}
      />
      <Button
        style={styles.button}
        appearance="ghost"
        onPress={() => {
          setRemoveItem(index);
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

  return (
    <List
      style={styles.container}
      data={data}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 330,
    flex: 1,
    //backgroundColor: "rgba(219,211,173, 0.1)",
  },
  listItem: {
    flex: 1,
    borderRadius: 10,
    height: 80,
    marginBottom: 2,
  },
  layout: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
});

export default AllergenList;
