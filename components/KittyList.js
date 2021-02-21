import React, { useState, useEffect } from "react";
import { Button, Icon, List, ListItem, Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const data = [
  {
    title: "Nötter",
    description: "Flaggar för: Jordnötter",
  },
  {
    title: "mejeriprodukter",
    description: "Flaggar för: Mjölk",
  },
  {
    title: "Fisk",
    description: "Flaggar för: Fisk/Skaldjur",
  },
];

const KittyList = () => {
  const [removeItem, setRemoveItem] = useState(null);
  const renderItemAccessory = () => (
    <Button
      onPress={(data) => {
        console.log(data);
      }}
      size="tiny"
    ></Button>
  );

  const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <Layout>
      <ListItem
        style={styles.listItem}
        title={`${item.title} ${index}`}
        description={`${item.description} ${index}`}
        accessoryLeft={renderItemIcon}
      />
      <Button
        style={styles.button}
        onPress={() => {
          setRemoveItem(index);
          console.log("this button has the index of: " + index);
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
    flexDirection: "row nowrap",
    maxHeight: 192,
    minWidth: 400,
    borderColor: "black",
    borderWidth: 2,
    paddingTop: 2,
  },
  listItem: {
    backgroundColor: "#C1CAD6",
    marginBottom: 2,
  },
  layout: {
    flexDirection: "row nowrap",
  },
  button: {
    top: 12,
    position: "absolute",
    right: 8,
    height: 33,
    minHeight: "offset",
  },
});

export default KittyList;
