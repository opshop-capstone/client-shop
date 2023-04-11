import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";

const Container = styled.View`
  margin: 4px;
  width: 34%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.imgBackground};
`;

const ItemTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const ShopCard = ({ url, style }) => {
  return (
    <Container>
      <ProfileImage style={style} source={{ uri: url }} />
      <ItemTitle>헨리 코튼 베이직 반팔 셔츠 공용 L</ItemTitle>
    </Container>
  );
};

ShopCard.propTypes = {
  url: propTypes.string,
};

export default ShopCard;
