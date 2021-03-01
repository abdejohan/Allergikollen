import React, { useEffect, useState } from "react";
import { Layout, Text, Button, Spinner, Avatar } from "@ui-kitten/components";
import { StyleSheet, ScrollText } from "react-native";
import useAxios from "axios-hooks";
import { Sizing } from "../styles/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY } from "@env";

const ProductScreen = ({ route, navigation }) => {
  const QRCODE = route.params.qrcode;
  const [product, setProduct] = useState({});
  const [noProduct, setNoProduct] = useState(false);
  const API_URL = `https://api.dabas.com/DABASService/V2/article/gtin/0${QRCODE}/JSON?apikey=${API_KEY}`;
  const [contains, setContains] = useState([]);
  const [mayContain, setMayContain] = useState([]);
  const [allergens, setAllergens] = useState([]);

  const [{ data, loading, error, response }, execute] = useAxios(API_URL);

  useEffect(() => {
    if (data) {
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
        setNoProduct(false);
        getData();
      }
    } else {
      setNoProduct(true);
    }
  }, [data]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("allergens")
        .then((response) => JSON.parse(response))
        .then((res) => {
          for (let y = 0; y < res.length; y++) {
            for (let i = 0; i < data.Allergener.length; i++) {
              if (
                data.Allergener[i].Allergen.toUpperCase().includes(
                  res[y].toUpperCase()
                ) &&
                data.Allergener[i].Nivakod === "CONTAINS"
              ) {
                setContains((contains) => [...contains, res[y].toUpperCase()]);
              }
              if (
                data.Allergener[i].Allergen.toUpperCase().includes(
                  res[y].toUpperCase()
                ) &&
                data.Allergener[i].Nivakod === "MAY_CONTAIN"
              ) {
                setMayContain((mayContain) => [
                  ...mayContain,
                  res[y].toUpperCase(),
                ]);
              }
            }
          }
        });

      setAllergens(jsonValue != null ? JSON.parse(jsonValue) : []);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log(e);
    }
  };

  const displayAllergens = (arr) => {
    return arr.map((item) => {
      return <Text key={item}>{item}</Text>;
    });
  };

  return (
    <Layout style={Sizing.Screen}>
      {loading && <Spinner size="giant" />}
      {/*{error && (
        <>
          <Text>Något vart fel. Testa igen!</Text>
          <Text>{JSON.stringify(error, null, 2)}</Text>
        </>
      )}*/}
      {Object.keys(product).length > 0 && (
        <>
          <Text category="c2">{product.varumarke}</Text>
          <Text category="h4">{product.tillverkare}</Text>
          <Text category="c2">{product.artikelbenamning}</Text>
          <Text category="c1">{product.tillverkningslander}</Text>
          <Avatar source={{ url: product.img }} style={styles.img1} />
          <Button onPress={() => navigation.navigate("OpenScanner")}>
            Fortsätt Scanna!
          </Button>
        </>
      )}

      {contains[0] ? (
        <Layout>
          <Text>This product contains: </Text>
          {displayAllergens(contains)}
        </Layout>
      ) : null}
      {mayContain[0] ? (
        <Layout>
          <Text>This product may contain: </Text>
          {displayAllergens(mayContain)}
        </Layout>
      ) : null}
      {contains[0] && mayContain[0] ? <Text>No allergens detected</Text> : null}
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
  },
});

export default ProductScreen;
