import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Profile,
  OpMain,
  AddItem,
  Shop,
  Goods,
  Cart,
  Order,
  OrderHistory,
  EditAddress,
  SearchPage,
  OrderDetail,
  ProductManager,
  DeleteItem,
  EditItem,
  EditItemDetail,
} from "../screens";
import { IconButton, Image } from "../components";
import Home from "./Home";
import MyPage from "./MyPage";
import { Button, Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Input } from "react-native-elements";

const Stack = createStackNavigator();
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 15px;
  color: #111;
  font-weight: bold;
`;

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 80, height: 20, borderRadius: 0 }}
      url="https://ifh.cc/g/M2TJZp.png"
      // source={require("../../assets/LogoTitle.png")}
    />
  );
};
const Main = () => {
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
        options={({ navigation }) => ({
          title: "MyPage",
          headerTitle: () => <LogoTitle />,
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="AddItem"
        component={AddItem}
        options={({ navigation }) => ({
          tabBarStyle: { display: undefined },
          title: "Main",
          headerTitle: "상품 추가",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "상점",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="Goods"
        component={Goods}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "상품",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "장바구니",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "주문하기",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      {/* <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "주문하기",
          headerRight: () => (
             <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style = {{marginLeft : 10}}>판매자용 서비스</StyledText>
            </Container>
          ),
        })}
      /> */}
      <Stack.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "주문 내역 확인",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="EditAddress"
        component={EditAddress}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "회원 정보 수정",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={({ navigation }) => ({
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "주문 상세 정보",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="ProductManager"
        component={ProductManager}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "상품관리",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="DeleteItem"
        component={DeleteItem}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "상품 제거",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="EditItem"
        component={EditItem}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "상품 수정",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="EditItemDetail"
        component={EditItemDetail}
        options={({ navigation }) => ({
          title: "Main",
          headerTitle: "상품 수정",
          headerRight: () => (
            <Container>
              <Fontisto name="shopping-store" size={20} color="black" />
              <StyledText style={{ marginLeft: 10 }}>
                판매자용 서비스
              </StyledText>
            </Container>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default Main;
