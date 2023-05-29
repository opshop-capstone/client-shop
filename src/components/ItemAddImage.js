import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  margin: 10px;
`;

const ProfileImage = styled.Image`
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

const CartButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon />
    </ButtonContainer>
  );
};
const ItemAddImage = ({ url, style, upload, onPress }) => {
  return (
    <Container>
      <ProfileImage style={style} source={{ uri: url }} />
      {upload ? <CartButton onPress={onPress}></CartButton> : <></>}
    </Container>
  );
};

ItemAddImage.propTypes = {
  url: propTypes.string,
};

export default ItemAddImage;
