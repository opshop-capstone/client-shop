import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";

const Container = styled.View`
  margin-bottom: 0px;
`;

const ProfileImage = styled.Image`
  background-color: ${({ theme }) => theme.imgBackground};
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const Image = ({ url, style }) => {
  return (
    <Container>
      <ProfileImage style={style} source={{ uri: url }} />
    </Container>
  );
};

Image.propTypes = {
  url: propTypes.string,
};

export default Image;
