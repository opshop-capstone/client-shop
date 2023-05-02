import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FlatList } from "react-native";
import { Image, IconButton, ItemCard, CustomButton } from "../components";
import { SliderBox } from "react-native-image-slider-box";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  padding: 10px;
  background-color: ${({ theme }) => theme.background};
`;
const BoxContainer = styled.View`
  flex: 1;
  padding: 10px;
  margin: 5px;
  background-color: ${({ theme }) => theme.background};
`;
const Contour = styled.View`
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.imgBackground};
  margin: 6px;
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
  const theme = useContext(ThemeContext);

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
            {[
              { name: "flame", title: "인기상점" },
              { name: "heart", title: "찜한상품" },
              { name: "location", title: "지역별" },
              { name: "apps", title: "카테고리" },
              { name: "star", title: "인기상품" },
            ].map((a, i) => {
              return (
                <CustomButton
                  key={i}
                  onPress={() => {
                    navigation.navigate("PopularShop", { key: i });
                  }}
                  iconName={a.name}
                  title={a.title}
                />
              );
            })}
          </LowContainer>
        </BoxContainer>
        <Contour />
        <BoxContainer>
          <StyledText>박상호님을 위한 맞춤 Pick!</StyledText>
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
                  url="https://ifh.cc/g/M2TJZp.png"
                  onPress={() => {
                    navigation.navigate("Goods");
                  }}
                />
              );
            })}
          </ItemContainer>
        </BoxContainer>
      </ScrollView>
    </Container>
  );
};

export default OpMain;
