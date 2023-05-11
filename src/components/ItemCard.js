import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  margin: 4px;
  width: 40%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const ProfileImage = styled.Image`
  width: 145px;
  height: 145px;
  resize-mode: contain;
  background-color: ${({ theme }) => theme.imgBackground};
`;
// 넘치게 배열할거면 width, height 설정 %로 하지말자 - 스크롤뷰 작동을 안함

const ItemTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const ImageContainer = styled.View`
  margin-bottom: 5px;
`;
const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.imgBtnBackground};
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled(Ionicons).attrs({
  name: "cart",
  size: 22,
})`
  color: ${({ theme }) => theme.imgBtnIcon};
`;

const PhotoButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon />
    </ButtonContainer>
  );
};

const ItemCard = ({ url, style, onPress, productTitle, shopName, price }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#ededed",
        margin: 5,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
      }}
      onPress={onPress}
    >
      <ImageContainer>
        <ProfileImage style={style} source={{ uri: url }} />
        <PhotoButton />
      </ImageContainer>
      <ItemTitle style={{ fontWeight: 700 }}>{productTitle}</ItemTitle>
      <ItemTitle>{shopName}</ItemTitle>
      <ItemTitle>{price}</ItemTitle>
    </TouchableOpacity>
  );
};

// ItemCard.propTypes = {
//   url: propTypes.string,
// };

export default ItemCard;
