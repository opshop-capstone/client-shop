import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import Navigation from "./navigation";
import { UserProvider, ItemContext } from "./contexts";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "랄프로렌 울 모직 여자 M",
      price: "59000",
      image: "https://m.oldlook.co.kr/web/product/big/ok31400.JPG",
    },
    {
      id: 2,
      name: "Product 2",
      price: "49000",
      image: "https://ifh.cc/g/M2TJZp.png",
    },
    {
      id: 3,
      name: "Product 3",
      price: 0,
      image: "https://ifh.cc/g/M2TJZp.png",
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ItemContext.Provider value={{ cartItems, setCartItems }}>
          <StatusBar
            backgroundColor={theme.background}
            barStyle="dark-content"
          />
          <Navigation />
        </ItemContext.Provider>
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
