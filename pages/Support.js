import React, { useState } from "react";
import { Menu, MenuItem, Text } from "@ui-kitten/components";

export const Support = ({ navigation }) => {
  return (
    <React.Fragment>
      <Menu>
        <MenuItem
          title={(() => <Text style={{ fontSize: 20}}>Om Allergikollen</Text>)}
          onPress={() => {
            navigation.navigate("Allergikollen");
          }}
        />
        <MenuItem
          title={(() => <Text style={{ fontSize: 20}}>Kontakt</Text>)}
          onPress={() => {
            navigation.navigate("Kontakt");
          }}
        />
        <MenuItem
          title={(() => <Text style={{ fontSize: 20}}>Kundtjänst</Text>)}
          onPress={() => {
            navigation.navigate("Kundtjanst");
          }}
        />
        <MenuItem
          title={(() => <Text style={{ fontSize: 20}}>Hjälp</Text>)}
          onPress={() => {
            navigation.navigate("Hjalp");
          }}
        />
      </Menu>
    </React.Fragment>
  );
};

export default Support;
