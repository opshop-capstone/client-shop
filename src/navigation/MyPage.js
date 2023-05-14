import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Profile, OrderHistory } from "../screens";
import { IconButton, Image } from "../components";
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
      style={{ width: 80, height: 20, borderRadius: 0, overflow: "cover" }}
      url="https://ifh.cc/g/M2TJZp.png"
      // source={require("../../assets/LogoTitle.png")}
    />
  );
};
const MyPage = () => {
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
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: "MyPage",
          headerTitle: () => <LogoTitle />,
          headerRight: () => (
            <Container>
              <IconButton name="menu" onPress={() => alert("test")} />
              <IconButton name="search" />
              <IconButton name="cart" onPress={() => alert("test")} />
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          title: "MyPage",
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
    </Stack.Navigator>
  );
};

export default MyPage;
