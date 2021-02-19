import React, { useEffect, useState } from "react";
import { Layout, Text } from "@ui-kitten/components";
import { API_KEY } from "@env";
import axios from "axios";

const ProductScreen = ({ route }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h2">{product.artikelbenamning}</Text>
      <Text category="s1">{product.Varumarke} </Text>
      <Text> {JSON.stringify(product)} </Text>
    </Layout>
  );
};

export default ProductScreen;
