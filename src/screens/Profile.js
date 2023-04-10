import React, { useState, useContext } from "react";
import { UserContext } from "../contexts";
import { Button, Image, Input } from "../components";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;
background - color: ${({ theme }) => theme.background} ;
padding : 0 20px;

`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Profile = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  return (
    <Container>
      <StyledText>마이페이지</StyledText>
      <Button title="로그아웃" onPress={() => setUser({})} />
    </Container>
  );
};

export default Profile;
