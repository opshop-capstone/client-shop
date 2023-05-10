import React, { useState, useEffect } from "react";

import axios from "axios";

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import {
  CustomButton,
  ButtonNoFlex,
  AddToCartButton,
  Button,
} from "../components";
import styled from "styled-components";

const LowContainer = styled.View`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Contour = styled.View`
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.imgBackground};
`;

const Goods = ({ route, product, navigation }) => {
  const productId = route.params.productId;
  const [cartMessage, setCartMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [title, setTitle] = useState("");
  const [productPrice, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  //상품 상세
  useEffect(() => {
    console.log(productId);
    try {
      // 상품 상세 api
      axios
        .get(`http://opshop.shop:3000/opshop/products/${productId}`)

        .then(function (response) {
          const result = response.data.result.info[0];
          const test = response.data.result;
          console.log(response.data.result.info[0]);
          console.log(response.data.result.info[1]);
          if (result) {
            setStoreName(result.store_name);
            setTitle(result.title);
            setPrice(result.price);
            setContent(result.content);
            setSize(result.size);
            setCategory(result.category);
          }
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
    } catch (e) {
      console.log(e);
      alert(e);
    } finally {
      return () => {
        isMount = false;
      };
    }
  }, []);

  const handleAddToCart = () => {
    setCartMessage("Added to Cart!");
    setShowModal(true);
  };

  const handleMoveToCart = () => {
    console.log("Navigating to Cart");
    setShowModal(false);
  };

  const handleContinueShopping = () => {
    setCartMessage("");
    setShowModal(false);
  };
  const StyledText = styled.Text`
    font-size: 20px;
    color: #111;
    font-weight: 600;
    margin-bottom: 15px;
  `;
  product = {
    image: "https://m.oldlook.co.kr/web/product/big/ok31400.JPG",
    shopName: "VINTAGE TALK",
    productName: "랄프로렌 울 모직 여자M",
    brandName: "RALPH LAUREN",
    price: "59,000",
    description: `
상품 상세 정보

브랜드 : RALPH LAUREN

상품명 : 모직 블레이저 

수입국가 : JPN

소재 : 울 ( 상품 하단 택 이미지 참조 )

제품 상태 : 제품사진 외에 특별히 오염, 데미지 없는 상태

실측사이즈 단면 (cm)

어깨 : 38 가슴 : 45 소매 : 57 총기장 : 57

사이즈 : 여자 M

브랜드 의류마다 표기사이즈와 실측사이즈가 다르니, 구매전 실측 사이즈를 비교 후 구매하시면 정확한 사이즈를 구매를 할수있습니다. 

사이즈는 재는 방법에 따라 1~2cm 정도 오차가 있을수 있습니다.
    `,
  };
  const { image, shopName, productName, brandName, price, description } =
    product;
  return (
    <Container>
      <ScrollView>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.shopName}>{storeName}</Text>
          <Text style={styles.productName}>{title}</Text>
          <Text style={styles.brandName}>{brandName}</Text>
          <Text style={styles.brandName}>
            {category == "TOP" ? "상의" : "다른거"}
          </Text>
          <Text style={styles.description}>{size}</Text>
          <Text style={styles.price}>{productPrice} 원</Text>
          <Contour />
          <Text style={styles.description}>{content}</Text>
        </View>
      </ScrollView>

      <LowContainer>
        <CustomButton
          iconName="heart"
          title="찜하기"
          onPress={() => {
            alert("상품이 찜한 상품에 추가되었어요!");
          }}
          containerStyle={{
            width: 60, // 원하는 크기로 지정
            height: 60,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#111",
          }}
        />
        <ButtonNoFlex
          containerStyle={{
            width: 290,
            borderRadius: 8,
            backgroundColor: "#111",
            height: 60,
            marginLeft: 10,
          }}
          onPress={() => {
            console.log({ product });
            handleAddToCart();
          }}
          title="장바구니에 담기"
        />
      </LowContainer>
      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <StyledText>장바구니에 </StyledText>
          <StyledText> '{productName}' 이 </StyledText>
          <StyledText> 담겼어요! </StyledText>
          <Contour />

          <View style={styles.modalButtonsContainer}>
            <Button
              title="장바구니로 이동하기"
              onPress={() => {
                handleMoveToCart();
                navigation.navigate("Cart");
              }}
              containerStyle={{
                marginTop: 0,
                backgroundColor: "#fff",
              }}
              textStyle={{
                color: "#111",
                fontSize: 20,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            />
            <Button title="쇼핑 계속하기" onPress={handleContinueShopping} />
          </View>
        </View>
      </Modal>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonsContainer: {
    justifyContent: "space-between",
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
});

export default Goods;
