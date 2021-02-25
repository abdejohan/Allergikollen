import React, { useState, useEffect } from "react";
import {
  Button,
  Icon,
  List,
  Text,
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
];
// icon in 'remove allergen' button
const close = (props) => <Icon {...props} name="close-circle-outline" />;

const AllergenList = () => {
  const [removeItem, setRemoveItem] = useState(null);

  const renderItem = ({ item, index }) => (
    <Layout style={styles.layout}>
      <ListItem
        title={item.title}
        children={
          <Button
            style={styles.button}
            size="small"
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
      {data.length > 0 ? (
        <List
          contentContainerStyle={styles.container2}
          data={data}
          numColumns={2}
          renderItem={renderItem}
        />
      ) : (
        <>
          <Text category="s1">Du har inte valt någon allergi..</Text>
          <Text category="s2">
            Dont worry, vi visar allt vi hittar endå! 🍎
          </Text>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container2: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "rgba(50, 159, 91, 0.48)",
  },
});

export default AllergenList;
