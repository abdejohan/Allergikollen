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
        label="Sök Manuellt"
        value={value}
        style={styles.input}
        placeholder="ex. 7 350 002 404 980"
        icon={SearchIcon}
        caption="Knappa in streckkodens siffror"
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
        Sök
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 32,
  },
});
export default QrSearchManually;
