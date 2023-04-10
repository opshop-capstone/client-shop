import React, { useState, useRef, useContext } from "react";
import { Button, Image, Input } from "../components";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserContext } from "../contexts";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 50px 20px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  color: #111;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Signup = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const insets = useSafeAreaInsets();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const refPassword = useRef(null);

  const _handleSignupBtnPress = () => {
    console.log("회원가입");
  };
  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container insets={insets}>
        <Image
          style={{ width: 200, height: 200 }}
          url="https://ifh.cc/g/M2TJZp.png"
        />

        <StyledText>회원가입</StyledText>
        <Input
          label="이름"
          placeholder="홍길동"
          returnKeyType="next"
          value={name}
          onChangeText={setName}
          onSubmitEditing={() => {
            refPassword.current.focus();
          }}
        />
        <Input
          label="이메일"
          placeholder="aaaa@email.com"
          returnKeyType="ndoneext"
          value={password}
          onChangeText={setPassword}
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

        <Input
          ref={refPassword}
          label="비밀번호 확인"
          placeholder="password confirm"
          returnKeyType="ndoneext"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
        />
        <Input
          label="휴대폰번호"
          placeholder="'-'는 제외하고 입력하세요."
          returnKeyType="ndoneext"
          value={password}
          onChangeText={setPassword}
          isPassword={true}
        />

        <Button title="회원가입" onPress={_handleSignupBtnPress()} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;
