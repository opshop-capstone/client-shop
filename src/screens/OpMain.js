import React from "react";
import styled from "styled-components";
import { Image } from "../components";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

const OpMain = () => {
  return (
    <Container>
      <Image url="https://ifh.cc/g/M2TJZp.png" />
    </Container>
  );
};

export default OpMain;
