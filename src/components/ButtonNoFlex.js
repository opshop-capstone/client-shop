import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import propTypes from "prop-types";

const Container = styled.View`
  background-color: ${({ theme }) => theme.btnBackground};
  padding: 10px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.btnTitle};
`;

const ButtonNoFlex = ({ title, onPress, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: "row" }}>
      <Container style={containerStyle}>
        <Title style={textStyle}>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};

// ButtonNoFlex.propTypes = {
//   title: propTypes.string.isRequired,
//   onPress: propTypes.func.isRequired,
//   containerStyle: propTypes.object.isRequired,
//   textStyle: propTypes.object.isRequired,
// };

export default ButtonNoFlex;
