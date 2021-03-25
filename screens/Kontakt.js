import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider, List, Text, ListItem } from "@ui-kitten/components";

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
    <View style={styles.listItem}>
      <Text style={{ fontSize: 20, fontWeight: "bold"}}>{item.title}</Text>
      <Text style={{ fontSize: 16}}>{item.description}</Text>
    </View>
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
    padding: 20,
    minHeight: 150,
    alignItems: "flex-start",
    justifyContent: "center"
  },
});

export default Kontakt;
