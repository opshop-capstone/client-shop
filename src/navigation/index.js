import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./Auth";
import { UserContext } from "../contexts";
import Main from "./Main";
import MyPage from "./MyPage";

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>{user ? <Main /> : <Auth />}</NavigationContainer>
  );
};

export default Navigation;
// 결제페이지 먼저?
