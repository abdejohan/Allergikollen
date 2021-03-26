import React, { useEffect, useState } from "react";
import { Text, Button, Spinner, Card, Avatar } from "@ui-kitten/components";
import { StyleSheet, View, ScrollView } from "react-native";
import useAxios from "axios-hooks";
import { Sizing } from "../styles/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY } from "@env";

const ProductScreen = ({ route, navigation }) => {
  const QRCODE = route.params.qrcode;
  const [product, setProduct] = useState(null);
  const [noProduct, setNoProduct] = useState(false);
  const API_URL = `https://api.dabas.com/DABASService/V2/article/gtin/0${QRCODE}/JSON?apikey=${API_KEY}`;
  const [contains, setContains] = useState([]);
  const [mayContain, setMayContain] = useState([]);
  const [allergens, setAllergens] = useState([]);
  const [cardStatus, setCardStatus] = useState("");

  const [{ data, loading, error }, execute] = useAxios(API_URL);

  useEffect(() => {
    if (data) {
      if (Object.keys(data).length > 0) {
        setProduct({
          varumarke: data.Varumarke.Varumarke,
          tillverkare: data.Varumarke.Tillverkare.Namn,
          ...(data.Bilder[0].Lank !== null && { img: data.Bilder[0].Lank }),
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

  useEffect(() => {
    if (contains.length === 0 && mayContain.length === 0) {
      setCardStatus("success");
    } 
    if (contains.length !== 0 && mayContain.length === 0) {
      setCardStatus("warning");
    } 
    if (contains.length !== 0) {
      setCardStatus("danger");
    } 
  },[contains, mayContain])

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

  const Header = (props) => (
    <View {...props}>
      {product !== null && product !== undefined && (
        <>
          <Text category="c2">{product.varumarke}</Text>
          <Text category="h4">{product.tillverkare}</Text>
          <Text category="c2">{product.artikelbenamning}</Text>
          <Text category="c1">{product.tillverkningslander}</Text>
        </>
      )}
      {noProduct && !loading && (
        <Text category="h1">Produkt saknas!</Text>
    )}
    </View>
  );
  
  const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      {product !== null && product !== undefined  && (
        <>
          <Button style={[styles.button, { marginRight: 15}]} appearance="outline" onPress={() => alert("Oops. funkar inte än!")}>
            Spara
          </Button>
          <Button style={styles.buttuon} onPress={() => navigation.navigate("OpenScanner")}>
            Fortsätt Scanna!
          </Button>
        </>
        )}
        {noProduct && !loading && (
          <>
            <Button  style={[styles.button, { marginRight: 15}]} appearance="outline" onPress={() => alert("button pressed")}>
              Lägg till
            </Button>
            <Button style={styles.buttuon} onPress={() => navigation.navigate("OpenScanner")}>
              Fortsätt Scanna!
            </Button>
          </>
        )}
    </View>
  );



  return (
    <ScrollView style={Sizing.ScrollScreen}>
      <Card style={styles.card} status={cardStatus} header={Header} footer={Footer}>
      {loading && <Spinner size="giant" />}
      { product !== null && product !== undefined &&
        <Avatar source={{ url: product.img }} style={styles.img1} />
      }
      { noProduct && !loading && 
        <View style={{ flex: 1 }}> 
          <Text category="h6">Produkten du har scannat verkar inte finnas hos oss.</Text>
        </View>
      }
      {contains && contains.map((element) => <Card key={element} header={() => <Text category="h4">Innehåller</Text>} status="danger"><Text>{element}</Text></Card>)}
      {mayContain && mayContain.map((element) => <Card key={element} header={() => <Text category="h4">Kan innehålla spår av</Text>} status="warning"><Text>{element}</Text></Card>)}
      {contains.length === 0 && mayContain.length === 0 && <Card status="success"><Text style={{fontSize: 20}}>Finns inga spår av dina allergier!</Text></Card>}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 40,
  },
  img1: {
    alignSelf: "center",
    margin: 10,
    width: 200,
    height: 200,
    borderWidth: 2,
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
  }
});

export default ProductScreen;
