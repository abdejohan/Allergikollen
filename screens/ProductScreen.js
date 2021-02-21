import React, { useEffect, useState } from "react";
import { Layout, Text, Button } from "@ui-kitten/components";
import { Image, StyleSheet } from "react-native";

import { API_KEY } from "@env";
import axios from "axios";

const ProductScreen = ({ route, navigation }) => {
  const QRCODE = route.params.qrcode;
  const [product, setProduct] = useState({});
  const API_URL = `https://api.dabas.com/DABASService/V2/article/gtin/0${QRCODE}/JSON?apikey=${API_KEY}`;

  const fetchProduct = async () => {
    try {
      await axios.get(API_URL).then((res) => {
        const response = res.data;
        if (Object.keys(response).length > 0) {
          setProduct({
            varumarke: response.Varumarke.Varumarke,
            tillverkare: response.Varumarke.Tillverkare.Namn,
            img: response.Bilder[0].Lank,
            tillverkningslander: response.Tillverkningslander[0].Land,
            allergener: response.Allergener,
            Ingredienser: response.Ingredienser,
            artikelbenamning: response.Artikelbenamning,
            huvudgruppBenamning: response.Varugrupp.HuvudgruppBenamning,
            ingrediensforteckning: response.Ingrediensforteckning,
          });
        } else {
          setProduct({});
        }
      });
      console.log(product);
    } catch (error) {
      alert(`ERROR MESSAGE: ${error}`);
      console.log(`ERROR MESSAGE: ${error}`);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {Object.keys(product).length > 0 ? (
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
      ) : (
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
