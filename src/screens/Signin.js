import React, { useState, useRef, useContext } from "react";
import { Button, Image, Input } from "../components";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserContext } from "../contexts";

const Container = styled.View`
flex : 1;
justify-content : center;
align-items : center;
background - color: ${({ theme }) => theme.background} ;
padding : 20px 20px;
padding-top : ${({ insets: { top } }) => top}px
padding-bottom : ${({ insets: { bottom } }) => bottom}px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Signin = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const refPassword = useRef(null);

  const _handleSigninBtnPress = () => {
    const user = "aaa";
    setUser(user);
    console.log("로그인");
  };
  return (
    <KeyboardAwareScrollView>
      <Container insets={insets}>
        <Image
          style={{ width: 200, height: 200 }}
          url="https://ifh.cc/g/M2TJZp.png"
        />
        <StyledText style={{ fontSize: 28, fontWeight: 500 }}>
          빈티지 아이콘,
        </StyledText>
        <StyledText>구제통합 OP Shop</StyledText>
        <Input
          label="이메일"
          placeholder="aaaaa@email.com"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => {
            refPassword.current.focus();
          }}
        />
        <Input
          ref={refPassword}
          label="비밀번호"
          placeholder="password"
          returnKeyType="ndoneext"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
        />
        <Button
          title="비밀번호를 잊으셨나요?"
          onPress={() => {
            navigation.navigate("비밀번호찾기");
          }}
          containerStyle={{
            marginTop: 0,
            backgroundColor: "#fff",
          }}
          textStyle={{ color: "#5d5d5d", fontSize: 20 }}
        />
        <Button
          title="로그인"
          onPress={() => {
            _handleSigninBtnPress();
          }}
        />
        <Button
          title="회원가입"
          onPress={() => {
            navigation.navigate("회원가입");
          }}
          containerStyle={{
            marginTop: 0,
            backgroundColor: "#fff",
          }}
          textStyle={{ color: "#111" }}
        />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signin;
