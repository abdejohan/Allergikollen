import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Layout, Text, Icon, Button, Card } from "@ui-kitten/components";
import { Sizing } from "../styles/index";

const Header = (props) => (
  <Layout {...props}>
    <Text category="h6">Om Allergikollen</Text>
    <Text category="s1">Bekanta dig med oss på Allergikollen</Text>
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
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </Text>
        </Card>
        <Card style={Sizing.Card} header={Header} footer={Footer}>
          <Text category="s1">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
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
});

export default Allergikollen;
