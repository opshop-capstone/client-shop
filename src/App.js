import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import Navigation from "./navigation";
import { UserProvider, ItemContext, CartProvider } from "./contexts";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "랄프로렌 울 모직 여자 M",
      price: "59000",
      image: "https://m.oldlook.co.kr/web/product/big/ok31400.JPG",
    },
    // {
    //   id: 2,
    //   name: "Product 2",
    //   price: "49000",
    //   image: "https://ifh.cc/g/M2TJZp.png",
    // },
    // {
    //   id: 3,
    //   name: "Product 3",
    //   price: 0,
    //   image: "https://ifh.cc/g/M2TJZp.png",
    // },
  ]);

  const [testItems, setTestItems] = useState([]);
  const [address, setAddress] = useState([
    {
      id: 1,
      zipcode: "22563",
      addressName: "본가",
      is_main: "Y",
      address:
        "인천광역시 미추홀구 주승로 96번길 42, 주안한신휴플러스 201동 407호",
    },
    {
      id: 2,
      addressName: "학교",
      zipcode: "22563",
      is_main: "N",

      address: "용인시 수지구 죽전로 152, 단국대학교",
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CartProvider>
          <ItemContext.Provider
            value={{
              cartItems,
              setCartItems,
              address,
              setAddress,
              testItems,
              setTestItems,
            }}
          >
            <StatusBar
              backgroundColor={theme.background}
              barStyle="dark-content"
            />
            <Navigation />
          </ItemContext.Provider>
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
