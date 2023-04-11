import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  margin: 4px;
  width: 40%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  resize-mode: contain;
  background-color: ${({ theme }) => theme.imgBackground};
`;
// 넘치게 배열할거면 width, height 설정 %로 하지말자

const ItemTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const ItemCard = ({ url, style }) => {
  return (
    <TouchableOpacity
      style={{
        margin: 5,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProfileImage style={style} source={{ uri: url }} />
      <ItemTitle style={{ fontWeight: 700 }}>상품명</ItemTitle>
      <ItemTitle>상점명</ItemTitle>
      <ItemTitle>상품가격</ItemTitle>
    </TouchableOpacity>
  );
};

ItemCard.propTypes = {
  url: propTypes.string,
};

export default ItemCard;
