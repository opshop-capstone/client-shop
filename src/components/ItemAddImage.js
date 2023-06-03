import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  margin: 10px;
`;

const ProductImage = styled.Image`
  background-color: ${({ theme }) => theme.imgBackground};
  width: 100px;
  height: 100px;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.imgBtnBackground};
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled(Ionicons).attrs({
  name: "camera",
  size: 50,
})`
  color: ${({ theme }) => theme.imgBtnIcon};
`;

const ThumbnailContainer = styled.View`
  background-color: black;
  position: absolute;
  left: 25px;
  bottom: 0;
  width: 50px;
  height: 20px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 10px;
`;

const ThumbnailImage = ({ onPress }) => {
  return (
    <ThumbnailContainer>
      <Thumbnail>대표사진</Thumbnail>
    </ThumbnailContainer>
  );
};

const DeleteContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.imgBtnBackground};
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const DeleteIcon = styled(Ionicons).attrs({
  name: "trash",
  size: 22,
})`
  color: ${({ theme }) => theme.imgBtnIcon};
`;

const DeleteButton = ({ onPress }) => {
  return (
    <DeleteContainer onPress={onPress}>
      <DeleteIcon />
    </DeleteContainer>
  );
};

const CartButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon />
    </ButtonContainer>
  );
};
const ItemAddImage = ({ url, style, upload, onPress, onDelete, thumbnail }) => {
  return (
    <Container>
      {!upload ? (
        <ProductImage style={style} source={{ uri: url }} />
      ) : (
        <ProductImage
          style={style}
          source={{ uri: "https://ifh.cc/g/M2TJZp.png" }}
        />
      )}
      {upload ? <CartButton onPress={onPress}></CartButton> : <></>}
      {!upload ? <DeleteButton onPress={onDelete} /> : <></>}
      {thumbnail ? <ThumbnailImage /> : <></>}
    </Container>
  );
};

ItemAddImage.propTypes = {
  url: propTypes.string,
};

export default ItemAddImage;
