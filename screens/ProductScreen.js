import React, { useEffect, useState } from "react";
import { Layout, Text, Button, Spinner } from "@ui-kitten/components";
import { Image, StyleSheet, ScrollText } from "react-native";
import useAxios from "axios-hooks";

import { API_KEY } from "@env";

const ProductScreen = ({ route, navigation }) => {
  const QRCODE = route.params.qrcode;
  const [product, setProduct] = useState({});
  const [noProduct, setNoProduct] = useState(false);
  console.log(Object.keys(product).length + "HÄR ÄR DEN FÖRSTA");
  console.log(noProduct);
  const API_URL = `https://api.dabas.com/DABASService/V2/article/gtin/0${QRCODE}/JSON?apikey=${API_KEY}`;

  const [{ data, loading, error, response }, execute] = useAxios(API_URL);

  useEffect(() => {
    if (data) {
      console.log("FINAL BOSS: " + Boolean(data));
      if (Object.keys(data).length > 0) {
        setProduct({
          varumarke: data.Varumarke.Varumarke,
          tillverkare: data.Varumarke.Tillverkare.Namn,
          img: data.Bilder[0].Lank,
          tillverkningslander: data.Tillverkningslander[0].Land,
          allergener: data.Allergener,
          Ingredienser: data.Ingredienser,
          artikelbenamning: data.Artikelbenamning,
          huvudgruppBenamning: data.Varugrupp.HuvudgruppBenamning,
          ingrediensforteckning: data.Ingrediensforteckning,
        });
        console.log(noProduct);
        setNoProduct(false);
      }
    } else {
      console.log(noProduct);
      setNoProduct(true);
      console.log("got here");
    }
  }, [data]);

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading && <Spinner size="giant" />}
      {error && (
        <>
          <Text>ERRORR</Text>
          <ScrollText>{JSON.stringify(error, null, 2)}</ScrollText>
        </>
      )}
      {Object.keys(product).length > 0 && (
        <>
          <Text category="c2">{product.varumarke}</Text>
          <Text category="h4">{product.tillverkare}</Text>
          <Text category="c2">{product.artikelbenamning}</Text>
          <Text category="c1">{product.tillverkningslander}</Text>
          <Image source={{ url: product.img }} style={styles.img1} />
          <Button onPress={() => navigation.navigate("OpenScanner")}>
            Fortsätt Scanna!
          </Button>
        </>
      )}
      {noProduct && !loading && (
        <>
          <Text category="h1">Produkt saknas!</Text>
          <Text category="h6">
            Produkten du har scannat verkar inte finnas hos oss.
          </Text>
          <Button onPress={() => alert("button pressed")}>
            Hjälp oss lägga till den!
          </Button>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  img1: {
    marginTop: 30,
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "green",
  },
});

export default ProductScreen;
