import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

const Category = () => {
  return (
    <Container>
      <StyledText>카테고리 별로 분류하기</StyledText>
    </Container>
  );
};

export default Category;
