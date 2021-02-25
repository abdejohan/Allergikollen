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
        style={styles.listItem}
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
          style={styles.container}
          contentContainerStyle={styles.container2}
          data={data}
          numColumns={2}
          renderItem={renderItem}
        />
      ) : (
        <>
          <Text category="h6">Du har inte valt någon allergi..</Text>
          <Text category="s1">Vi visar istället allt vi hittar</Text>
          <Text category="s2">Vi visar istället allt vi hittar</Text>
          <Text category="p1">Vi visar istället allt vi hittar</Text>
          <Text category="p2">Vi visar istället allt vi hittar</Text>
          <Text category="c1">Vi visar istället allt vi hittar</Text>
          <Text category="c2">Vi visar istället allt vi hittar</Text>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  container2: {
    minWidth: 300,
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
  button: {
    backgroundColor: "rgba(50, 159, 91, 0.48)",
  },
});

export default AllergenList;
