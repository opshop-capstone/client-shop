import React, { useContext, useEffect, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { FlatList } from "react-native";
import { Image, IconButton, ItemCard, CustomButton } from "../components";
import { SliderBox } from "react-native-image-slider-box";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ScrollView } from "react-native";
import axios from "axios";
import { ItemContext } from "../contexts";

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
  const [shopItem, setShopItem] = useState([]);
  useEffect(() => {
    try {
      // 상품 상세 api
      axios
        .get(`http://opshop.shop:3000/opshop/stores/2`)

        .then(function (response) {
          const result = response.data.result;
          if (result) {
            setShopItem(result);
            // console.log(shopItem[0].product_thumbnail);
            console.log("shopItem");
            console.log(shopItem);
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
              { name: "location", title: "지역별" },
              { name: "apps", title: "카테고리" },
              { name: "star", title: "인기상품" },
              { name: "heart", title: "찜한상품" },
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
            {shopItem.map((a, i) => {
              return (
                <ItemCard
                  key={i}
                  onPress={() => {
                    navigation.navigate("Goods", { productId: i + 4 });
                  }}
                  url={a.product_thumbnail}
                  productTitle={a.title}
                  shopName="VINTAGE TALK"
                  price="39,000원"
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
