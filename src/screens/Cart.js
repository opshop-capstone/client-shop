import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

const Cart = () => {
  return (
    <Container>
      <StyledText>장바구니</StyledText>
    </Container>
  );
};

export default Cart;
