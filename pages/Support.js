import React, { useState } from "react";
import { Menu, MenuItem, Text } from "@ui-kitten/components";

export const Support = ({ navigation }) => {
  return (
    <React.Fragment>
      <Menu>
        <MenuItem
          title="Om oss"
          onPress={() => {
            navigation.navigate("IntroPage");
          }}
        />
        <MenuItem
          title="Kontakt"
          onPress={() => {
            navigation.navigate("IntroPage");
          }}
        />
        <MenuItem
          title="Kundtjänst"
          onPress={() => {
            navigation.navigate("IntroPage");
          }}
        />
        <MenuItem
          title="Hjälp"
          onPress={() => {
            navigation.navigate("IntroPage");
          }}
        />
      </Menu>
    </React.Fragment>
  );
};

export default Support;
