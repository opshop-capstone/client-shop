import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile, OpMain, PopularShop, Shop, Goods } from "../screens";
import { Image, IconButton } from "../components";
import Home from "./Home";
import { Button } from "react-native";

const Stack = createStackNavigator();
const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.background};
`;
const LogoTitle = () => {
  return (
    <Image
      style={{ width: 90, height: 90 }}
      url="https://ifh.cc/g/M2TJZp.png"
    />
  );
};
const Main = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
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
    </Stack.Navigator>
  );
};

export default Main;
