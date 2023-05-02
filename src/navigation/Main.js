import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Profile,
  OpMain,
  PopularShop,
  Shop,
  Goods,
  Cart,
  Order,
  OrderHistory,
  EditAddress,
} from "../screens";
import { IconButton, Image } from "../components";
import Home from "./Home";
import MyPage from "./MyPage";
import { Button } from "react-native";

const Stack = createStackNavigator();
const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.background};
`;
const LogoTitle = () => {
  return (
    <Image
      style={{ width: 80, height: 20, borderRadius: 0, overflow: "cover" }}
      url="https://ifh.cc/g/M2TJZp.png"
      // source={require("../../assets/LogoTitle.png")}
    />
  );
};
const Main = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        overflow: "hidden",
        headerTitleAlign: "auto",
        headerTintColor: theme.text,
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Main",
          headerTitle: () => <LogoTitle />,
          headerRight: () => (
            <Container>
              <IconButton name="menu" onPress={() => alert("test")} />
              <IconButton name="search" onPress={() => alert("test")} />
              <IconButton name="cart" onPress={() => alert("test")} />
            </Container>
          ),
        }}
      />
      <Stack.Screen
        name="PopularShop"
        component={PopularShop}
        options={{
          tabBarStyle: { display: undefined },
          title: "Main",
          headerTitle: () => <LogoTitle />,
          headerRight: () => (
            <Container>
              <IconButton name="menu" onPress={() => alert("test")} />
              <IconButton name="search" onPress={() => alert("test")} />
              <IconButton name="cart" onPress={() => alert("test")} />
            </Container>
          ),
        }}
      />
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          title: "Main",
          headerTitle: "VINTAGE TALK",
          headerRight: () => (
            <Container>
              <IconButton name="menu" onPress={() => alert("test")} />
              <IconButton name="search" onPress={() => alert("test")} />
              <IconButton name="cart" onPress={() => alert("test")} />
            </Container>
          ),
        }}
      />
      <Stack.Screen
        name="Goods"
        component={Goods}
        options={{
          title: "Main",
          headerTitle: "VINTAGE TALK",
          headerRight: () => (
            <Container>
              <IconButton name="menu" onPress={() => alert("test")} />
              <IconButton name="search" onPress={() => alert("test")} />
              <IconButton name="cart" onPress={() => alert("test")} />
            </Container>
          ),
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Main",
          headerTitle: "장바구니",
          headerRight: () => (
            <Container>
              <IconButton name="menu" onPress={() => alert("test")} />
              <IconButton name="search" onPress={() => alert("test")} />
              <IconButton name="cart" onPress={() => alert("test")} />
            </Container>
          ),
        }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{
          title: "Main",
          headerTitle: "주문하기",
          headerRight: () => (
            <Container>
              <IconButton name="menu" onPress={() => alert("test")} />
              <IconButton name="search" onPress={() => alert("test")} />
              <IconButton name="cart" onPress={() => alert("test")} />
            </Container>
          ),
        }}
      />
      {/* <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: "Main",
          headerTitle: "주문하기",
          headerRight: () => (
            <Container>
              <IconButton name="menu" onPress={() => alert("test")} />
              <IconButton name="search" onPress={() => alert("test")} />
              <IconButton name="cart" onPress={() => alert("test")} />
            </Container>
          ),
        }}
      /> */}
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          title: "Main",
          headerTitle: "주문 내역 확인",
          headerRight: () => (
            <Container>
              <IconButton name="menu" onPress={() => alert("test")} />
              <IconButton name="search" onPress={() => alert("test")} />
              <IconButton name="cart" onPress={() => alert("test")} />
            </Container>
          ),
        }}
      />
      <Stack.Screen
        name="EditAddress"
        component={EditAddress}
        options={{
          title: "Main",
          headerTitle: "회원 정보 수정",
          headerRight: () => (
            <Container>
              <IconButton name="menu" onPress={() => alert("test")} />
              <IconButton name="search" onPress={() => alert("test")} />
              <IconButton name="cart" onPress={() => alert("test")} />
            </Container>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
