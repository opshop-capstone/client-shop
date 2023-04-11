import React, { useState, useContext } from "react";
import { UserContext } from "../contexts";
import { Button, CustomButton, Image, Input } from "../components";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111;
  font-weight: 600;
  margin-bottom: 15px;
`;

const LowContainer = styled.View`
  margin: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const PopularShop = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  return (
    <ScrollView>
      <Container>
        <LowContainer>
          <CustomButton
            onPress={() => {
              navigation.navigate("PopularShop");
            }}
            iconName="flame"
            title="인기상점"
          />
          <CustomButton
            onPress={() => {
              alert("dd");
            }}
            iconName="heart"
            title="찜한상품"
          />
          <CustomButton
            onPress={() => {
              alert("dd");
            }}
            iconName="location"
            title="지역별"
          />
          <CustomButton
            onPress={() => {
              alert("dd");
            }}
            iconName="apps"
            title="카테고리"
          />
          <CustomButton
            onPress={() => {
              alert("dd");
            }}
            iconName="star"
            title="인기상품"
          />
        </LowContainer>
      </Container>
    </ScrollView>
  );
};

export default PopularShop;
