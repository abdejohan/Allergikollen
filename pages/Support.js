import React, { useState } from "react";
import { Menu, MenuItem, Text } from "@ui-kitten/components";

export const Support = ({ navigation }) => {
  return (
    <React.Fragment>
      <Menu>
        <MenuItem
          title="Om Allergikollen"
          onPress={() => {
            navigation.navigate("Allergikollen");
          }}
        />
        <MenuItem
          title="Kontakt"
          onPress={() => {
            navigation.navigate("Kontakt");
          }}
        />
        <MenuItem
          title="Kundtjänst"
          onPress={() => {
            navigation.navigate("Kundtjanst");
          }}
        />
        <MenuItem
          title="Hjälp"
          onPress={() => {
            navigation.navigate("Hjalp");
          }}
        />
      </Menu>
    </React.Fragment>
  );
};

export default Support;
