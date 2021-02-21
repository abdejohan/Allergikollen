import React, { useState } from "react";
import { Input, Button, Icon, Text, Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
const trashCan = (props) => <Icon {...props} name="trash-2-outline" />;

const Settings = (props) => {
  const [newAllergen, setNewAllergen] = useState("");
  const setSelectedAllergens = props.setSelectedAllergens;
  const selectedAllergens = props.selectedAllergens;
  const deleteAllergen = props.deleteAllergen;

  // ICONS

  const handleTextChange = (event) => {
    setNewAllergen(event);
  };
  const addNewAllergen = () => {
    if (newAllergen) {
      setSelectedAllergens((selectedAllergens) => [
        ...selectedAllergens,
        newAllergen.toUpperCase(),
      ]);
    }
    setNewAllergen("");
  };

  const deleteItem = (item) => {
    console.log(item);
  };

  const showAllergen = (arr) => {
    if (arr[0]) {
      return arr.map((item) => {
        return (
          <Layout style={styles.listItem}>
            <Text key={item.id}>{item}</Text>
            <Button
              size="tiny"
              appearance="ghost"
              style={styles.button}
              accessoryLeft={trashCan}
              onPress={() => {
                deleteAllergen(item);
              }}
            >
              Ta bort
            </Button>
          </Layout>
        );
      });
    }
  };

  return (
    <Layout style={styles.container}>
      <Text category="h3">Välj allergi att övervaka</Text>
      <Text category="s1">
        I Listan nedan bör du lista de allergier som du vill att scannern ska ha
        ett extra öga över.
      </Text>

      <Layout style={styles.allergenList}>
        {selectedAllergens.length > 0 ? (
          showAllergen(selectedAllergens)
        ) : (
          <Text>Du har inga allergier valda än..</Text>
        )}
      </Layout>
      <Layout style={styles.searchBarContainer}>
        <Input
          style={styles.input}
          caption="finns inte din allergi? klicka här"
          value={newAllergen}
          onChangeText={(event) => handleTextChange(event)}
          placeholder="Sök.."
        ></Input>
        <Button
          style={styles.button}
          appearance="outline"
          size="tiny"
          onPress={addNewAllergen}
        >
          Lägg till
        </Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
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
  searchBarContainer: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    height: 40,
  },
  input: {},
});
export default Settings;
