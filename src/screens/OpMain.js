import React from "react";
import styled from "styled-components";
import { FlatList } from "react-native";
import { Image, IconButton, ItemCard, CustomButton } from "../components";
import { SliderBox } from "react-native-image-slider-box";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.background};
`;
const BoxContainer = styled.View`
  flex: 1;
  padding: 10px;
  margin: 5px;
  background-color: ${({ theme }) => theme.background};
`;

const LowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  flex-wrap: wrap;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  flex-wrap: wrap;
`;

const StyledText = styled.Text`
  font-size: 24px;
  color: #111;
  font-weight: 600;
  margin-bottom: 15px;
`;

const sliderTouch = (index) => {
  alert(index + 1 + "번째 슬라이드");
};

const OpMain = ({ navigation }) => {
  return (
    <Container>
      <ScrollView>
        <SliderBox
          images={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDcI_0jxpFkyyTTJLScppbfluqc6VB_MdEw&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPLnqrA3M61JMMEkL2b3dvyYSJuwo5UkMgg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcaEucQHS70XZxXNOMNashZcMpuDWG_nAQJg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-VJYZTX_fNSe78o5U0g7qIsWXt5gHbF0DQ&usqp=CAU",
          ]}
          onCurrentImagePressed={(index) => {
            console.log("image pressed index : " + index);
            sliderTouch(index);
          }}
          autoplay
          circleLoop
        />
        <BoxContainer>
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
        </BoxContainer>

        <BoxContainer>
          <StyledText>박상호님을 위한 맞춤 Pick!</StyledText>
          <ItemContainer>
            <ItemCard url="https://m.oldlook.co.kr/web/product/big/ok31400.JPG" />
            <ItemCard url="https://ifh.cc/g/M2TJZp.png" />
            <ItemCard url="https://ifh.cc/g/M2TJZp.png" />
            <ItemCard url="https://ifh.cc/g/M2TJZp.png" />
            <ItemCard url="https://ifh.cc/g/M2TJZp.png" />
          </ItemContainer>
        </BoxContainer>
      </ScrollView>
    </Container>
  );
};

export default OpMain;
