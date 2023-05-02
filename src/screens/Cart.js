import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styled from "styled-components";
import { Button } from "../components";
import { ItemContext } from "../contexts";
import { Feather } from "@expo/vector-icons";

const FixContainer = styled.View`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalPrice = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: space;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: #111;
  font-weight: 600;
`;

const ButtonIcon = styled(Feather).attrs({
  name: "x",
  size: 22,
})`
  color: white;
`;

const Cart = ({ navigation }) => {
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: 1,
  //     name: "랄프로렌 울 모직 여자 M",
  //     price: "59000",
  //     image: "https://m.oldlook.co.kr/web/product/big/ok31400.JPG",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     price: "49000",
  //     image: "https://ifh.cc/g/M2TJZp.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     price: 0,
  //     image: "https://ifh.cc/g/M2TJZp.png",
  //   },
  // ]);
  const { cartItems, setCartItems } = useContext(ItemContext);
  let sum = 0;

  cartItems.map((item) => {
    sum += parseFloat(item.price);
  });

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {cartItems.map((item) => (
          <View style={styles.productCard} key={item.id}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{`${item.price}원`}</Text>
            </View>
            <TouchableOpacity
              onPress={() => removeItem(item.id)}
              style={styles.deleteButton}
            >
              <ButtonIcon />
              {/* <Text style={styles.deleteButtonText}>X</Text> */}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TotalPrice>
        <StyledText style={{ fontSize: 20, color: "grey" }}>합계 :</StyledText>
        <StyledText>{sum.toLocaleString()} 원</StyledText>
      </TotalPrice>
      <FixContainer>
        <Button
          title="주문하기"
          onPress={() => {
            navigation.navigate("Order");
          }}
        ></Button>
      </FixContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    flexGrow: 1,
    padding: 20,
  },
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    height: 95,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  productImage: {
    width: 75,
    height: "100%",
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
  deleteButton: {
    backgroundColor: "#111",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Cart;
