import React, { useState, useContext } from "react";
import { UserContext } from "../contexts";
import { Button, CustomButton, ItemCard, ShopCard } from "../components";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  margin: 20px;
  font-size: 20px;
  color: #111;
  font-weight: bold;
  margin-bottom: 15px;
`;

const BoxContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;
const Contour = styled.View`
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.imgBackground};
`;

const LowContainer = styled.View`
  position: sticky;
  margin: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ItemContainer = styled.View`
  margin: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  flex-wrap: wrap;
`;
const Shop = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  return (
    <Container>
      <ScrollView>
        <ShopCard
          onPress={() => {
            navigation.navigate("Shop");
          }}
          image="data:image/png;base64,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"
          title="VINTAGE TALK"
          description="매장 전화 번호 : 010-7343-0102
          인스타그램 : vintage_talk"
        />
        <ScrollView
          contentContainerStyle={{
            margin: 25,
            flexDirection: "row",
            overflow: "auto",

            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
          }}
          horizontal={true}
        >
          {[
            { name: "thumbs-up", title: "인기상품" },
            { name: "shirt", title: "부위별" },
            { name: "color-wand", title: "신상품" },
            { name: "ios-copy", title: "브랜드별" },
            { name: "ios-glasses", title: "패션잡화" },
          ].map((a, i) => {
            return (
              <CustomButton
                onPress={() => {
                  navigation.navigate("PopularShop");
                }}
                iconName={a.name}
                title={a.title}
              />
            );
          })}
        </ScrollView>

        <Contour />
        <StyledText>매장 인기 상품</StyledText>
        <ItemContainer>
          <ItemCard
            onPress={() => {
              navigation.navigate("Goods");
            }}
            url="https://m.oldlook.co.kr/web/product/big/ok31400.JPG"
          />

          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
              <ItemCard
                onPress={() => {
                  navigation.navigate("Goods");
                }}
                url="https://ifh.cc/g/M2TJZp.png"
              />
            );
          })}
        </ItemContainer>
      </ScrollView>
    </Container>
  );
};

export default Shop;
