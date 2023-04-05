import React from "react";
import styled from "styled-components";

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
      <StyledText>Home</StyledText>
    </Container>
  );
};

export default OpMain;
