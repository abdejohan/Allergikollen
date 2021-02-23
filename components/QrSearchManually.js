import React, { useState } from "react";
import { Input, Button, Icon, Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchIcon = (style) => <Icon {...style} name="search" />;

const QrSearchManually = () => {
  const [value, setValue] = useState("");
  const [qrcode, setQrcode] = useState("");
  const navigation = useNavigation();

  return (
    <Layout style={styles.layout}>
      <Input
        value={value}
        style={styles.input}
        placeholder="Search"
        icon={SearchIcon}
        caption="Knappa in siffrorna under streckkoden"
        onChangeText={(text) => {
          setValue(text);
          setQrcode(text);
        }}
      />
      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate("ProductScreen", { qrcode: qrcode });
          setValue("");
        }}
      >
        SÖK
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    marginVertical: 50,
  },
  button: {
    height: 32,
  },
});
export default QrSearchManually;
