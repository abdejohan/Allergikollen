import React, { useEffect, useState } from "react";
import { Layout, Text } from "@ui-kitten/components";
import { API_KEY } from "@env";
import axios from "axios";

const ProductScreen = ({ route }) => {
  const QRCODE = route.params.qrcode; // This data comes from the Scanner Page.
  const [product, setProduct] = useState({});
  const API_URL = `https://api.dabas.com/DABASService/V2/article/gtin/0${QRCODE}/JSON?apikey=${API_KEY}`;

  const fetchProduct = async () => {
    try {
      await axios
        .get(API_URL, {
          headers: {
            "Access-Control-Allow-Origin": "85.224.48.210",
          },
        })
        .then((res) => {
          const response = res.data.Produktkod;
          setProduct({});
        });
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
      <Text category="h2">{product.artikelbenamning}</Text>
      <Text category="s1">{product.Varumarke} </Text>
      <Text> {JSON.stringify(product)} </Text>
    </Layout>
  );
};

export default ProductScreen;
