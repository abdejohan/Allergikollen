import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

const Settings = (props) => {
  const [newAllergen, setNewAllergen] = useState("");
  const setSelectedAllergens = props.setSelectedAllergens;
  const selectedAllergens = props.selectedAllergens;
  const deleteAllergen = props.deleteAllergen;

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
          <Text key={item.id}>
            <MaterialIcons name="warning" size={24} color="red" /> {item}{" "}
            <Button
              title="delete"
              onPress={() => {
                deleteAllergen(item);
              }}
            />
          </Text>
        );
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "white" }}>
        <Text> Search and select allergen </Text>
        <TextInput
          style={{
            backgroundColor: "grey",
            width: 150,
            height: 40,
          }}
          value={newAllergen}
          onChangeText={(event) => handleTextChange(event)}
          placeholder="Enter allergene here"
        ></TextInput>
        <Button title="submit" onPress={addNewAllergen}></Button>
        <Text> Selected allergens: </Text>
        {selectedAllergens && (
          <View style={{ display: "flex", flexDirection: "column" }}>
            {showAllergen(selectedAllergens)}
          </View>
        )}
      </View>
    </View>
  );
};

export default Settings;
