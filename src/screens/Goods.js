import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, CustomButton } from "../components";
import styled from "styled-components";

const LowContainer = styled.View`
  position: sticky;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Goods = ({ product }) => {
  product = {
    image: "https://m.oldlook.co.kr/web/product/big/ok31400.JPG",
    shopName: "VINTAGE TALK",
    productName: "랄프로렌 울 모직 여자M",
    brandName: "RALPH LAUREN",
    price: "59,000",
    description: "상품설명",
  };
  const { image, shopName, productName, brandName, price, description } =
    product;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.shopName}>{shopName}</Text>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.brandName}>{brandName}</Text>
        <Text style={styles.price}>{price} 원</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <LowContainer>
        <CustomButton
          iconName="heart"
          containerStyle={{ backgroundColor: "#ededed", height: 20 }}
        />
        <Button
          containerStyle={{
            marginLeft: 5,
            borderRadius: 8,
            backgroundColor: "#111",
            height: 60,
          }}
          title="장바구니에 담기"
        />
      </LowContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: "100%",
    height: 400,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  info: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  shopName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  brandName: {
    fontSize: 14,
    color: "#999",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
  },
});

export default Goods;
