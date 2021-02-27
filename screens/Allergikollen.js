import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Layout,
  Text,
  Icon,
  List,
  ListItem,
  Button,
  Card,
} from "@ui-kitten/components";
import { Sizing } from "../styles/index";

const data = [
  {
    title:
      "Spannmål, som innehåller gluten (det vill säga vete, råg, korn, havre, spelt (dinkel), khorasanvete, eller korsningar mellan dem)",
  },
  { title: "Kräftdjur" },
  { title: "Ägg" },
  { title: "Fisk" },
  { title: "Jordnötter" },
  { title: "Sojabönor" },
  { title: "Mjölk och mjölkprodukter (inklusive laktos)" },
  {
    title:
      "Nötter, det vill säga mandel, hasselnöt, valnöt, cashewnöt, pekannöt, paranöt, pistaschmandel, makadamianöt/Queenslandsnöt",
  },
  { title: "Selleri" },
  { title: "Senap" },
  { title: "Sesamfrön" },
  {
    title:
      "Svaveldioxid och sulfit i koncentrationer på mer än 10 mg/kg eller 10 mg/liter",
  },
  { title: "Lupin" },
  { title: "Blötdjur (snäckor, musslor och bläckfisk)" },
];

const renderItem = ({ item, index }) => (
  <ListItem title={`${index + 1}. ${item.title}`} />
);

const Header = (props) => (
  <Layout {...props}>
    <Text category="h6">Om Allergikollen</Text>
    <Text category="s1">Bekanta dig med oss på Allergikollen</Text>
  </Layout>
);

const Header1 = (props) => (
  <Layout {...props}>
    <Text category="h6">
      ingredienser som oftast ger allergi eller annan överkänslighet
    </Text>
  </Layout>
);

const Footer = (props) => (
  <Layout {...props} style={[props.style, styles.footerContainer]}>
    <Button
      style={styles.footerButton}
      size="small"
      status="basic"
      onPress={() => {
        alert("button pressed");
      }}
    >
      DELA
    </Button>
    <Button
      style={styles.footerButton}
      size="small"
      onPress={() => {
        alert("button pressed");
      }}
    >
      LÄS MER
    </Button>
  </Layout>
);

const Allergikollen = () => {
  return (
    <ScrollView style={styles.ScrollView}>
      <Layout style={Sizing.Screen}>
        <Card style={Sizing.Card} header={Header} footer={Footer}>
          <Text category="s1">
            För dig som är allergisk eller överkänslig mot mat, är det viktigt
            att veta vad maten innehåller. Därför finns särskilda regler för hur
            vanliga allergiframkallande ingredienser ska märkas ut på
            förpackningen och hur man kan få information om dessa ingredienser
            på restaurang...
          </Text>
        </Card>
        <Card style={Sizing.Card} header={Header1} footer={Footer}>
          <Text category="s1">
            Om en allergisk person får i sig något hon eller han inte tål kan
            det leda till svåra symtom. Det finns inget botemedel för allergi.
            Det enda en allergisk person kan göra för att undvika att bli sjuk
            är att se till att maten inte innehåller det som orsakar allergin.
            För de 14 ingredienser/livsmedelsgrupper som orsakar flest
            allvarliga överkänslighetsreaktioner finns det särskilda märknings-
            och informationskrav. Dessa är:
          </Text>
          <List style={styles.list} data={data} renderItem={renderItem} />
          <Text category="s1">
            Även produkter framställda från dessa (till exempel sojalecitin)
            omfattas av märknings- och informationskraven.
            Ingredienserna/livsmedelsgrupperna brukar kallas allergener och hela
            listan kallas "allergenlistan" i den fortsatta texten.
          </Text>
        </Card>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: "white",
    flex: 1,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerButton: {
    marginHorizontal: 2,
  },
  list: {
    backgroundColor: "white",
  },
});

export default Allergikollen;
