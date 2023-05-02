import React, { useState } from "react";

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

const Goods = ({ product, navigation }) => {
  const [cartMessage, setCartMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

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
          <Text style={styles.shopName}>{shopName}</Text>
          <Text style={styles.productName}>{productName}</Text>
          <Text style={styles.brandName}>{brandName}</Text>
          <Text style={styles.price}>{price} 원</Text>
          <Contour />
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>

      <LowContainer>
        <CustomButton
          iconName="heart"
          title="찜하기"
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
