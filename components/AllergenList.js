import React, { useState, useEffect } from "react";
import { Button, Icon, List, ListItem, Layout } from "@ui-kitten/components";
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
];
// icon in 'remove allergen' button
const close = (props) => <Icon {...props} name="close-circle-outline" />;

const AllergenList = () => {
  const [removeItem, setRemoveItem] = useState(null);

  const renderItem = ({ item, index }) => (
    <Layout style={styles.layout}>
      <ListItem
        style={styles.listItem}
        title={item.title}
        children={
          <Button
            style={styles.button}
            size="tiny"
            accessoryRight={close}
            onPress={() => {
              setRemoveItem(index);
            }}
          >
            {item.title}
          </Button>
        }
      />
    </Layout>
  );

  useEffect(() => {
    if (removeItem !== null) {
      data.splice(removeItem, 1);
      setRemoveItem(null);
    }
  }, [removeItem]);

  return (
    <>
      <List
        style={styles.container}
        contentContainerStyle={styles.container2}
        data={data}
        horizontal={false}
        numColumns={3}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container2: {
    flexDirection: "column",
    backgroundColor: "white",
    flex: 1,
  },
  listItem: {},
  button: {
    marginHorizontal: 0,
    marginVertical: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default AllergenList;
