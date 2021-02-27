import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text, Card, Icon, Button } from "@ui-kitten/components";
import { Sizing, Typography } from "../styles/index";

const Header = (props) => (
  <Layout {...props}>
    <Text category="h6">Vad innebär "Kan innehålla spår av..."?</Text>
  </Layout>
);

const Header1 = (props) => (
  <Layout {...props}>
    <Text category="h6">Vad innebär märkningen ”fri-från”?</Text>
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

const Hjalp = () => {
  return (
    <ScrollView>
      <Layout style={Sizing.Screen}>
        <Card style={Sizing.Card} header={Header} footer={Footer}>
          <Text
            style={{ ...Typography.Italic, ...Sizing.padding }}
            category="h6"
          >
            Från Livsmedelsverket
          </Text>
          <Text category="s1">
            Märkning såsom ”Kan innehålla spår av…” är frivillig att använda för
            företag. Den används för att upplysa personer med bland annat
            allergi om att produkter kan vara förorenade med allergener som till
            exempel mjölk, hasselnöt och vete. Märkningen får inte...
          </Text>
        </Card>
        <Card style={Sizing.Card} header={Header1} footer={Footer}>
          <Text category="s1">
            Att märka livsmedel med uppgift om att de är "fria från" ett eller
            flera allergen är frivilligt för företag, men om de gör det så måste
            vissa krav uppfyllas. Bland annat ska uppgiften vara ...
          </Text>
        </Card>
        <Card style={Sizing.Card} header={Header} footer={Footer}>
          <Text category="s1">
            Märkning såsom ”Kan innehålla spår av…” är frivillig att använda för
            företag. Den används för att upplysa personer med bland annat
            allergi om att produkter kan vara förorenade med allergener som till
            exempel mjölk, hasselnöt och vete. Märkningen får inte...
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

export default Hjalp;
