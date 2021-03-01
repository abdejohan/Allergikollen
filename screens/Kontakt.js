import React from "react";
import { StyleSheet } from "react-native";
import { Divider, List, ListItem } from "@ui-kitten/components";

const data = [
  {
    title: "Telefon",
    description: "08 581 45 349",
  },

  {
    title: "Email",
    description: ["customer@allergikollen.com"],
  },

  {
    title: "Kontor",
    description: "Vi finns på Sveavägen 41, Stokholm 112 35. Kom förbi!",
  },
];

const Kontakt = () => {
  const renderItem = ({ item }) => (
    <ListItem
      style={styles.listItem}
      title={item.title}
      description={item.description}
    />
  );

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
    flex: 1,
  },
  listItem: {
    minHeight: 150,
  },
});

export default Kontakt;
