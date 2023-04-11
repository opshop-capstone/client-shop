import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import propTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ name, focused }) => {
  return <Ionicons name={name} size={28} color="#111" />;
};

const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.btnTitle};
`;

const IconButton = ({ name, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ margin: 10, flexDirection: "row" }}
    >
      <Icon name={name} />
    </TouchableOpacity>
  );
};

export default IconButton;
