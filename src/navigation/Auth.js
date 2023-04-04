import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Signin, Signup } from "../screens";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="로그인"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="회원가입"
        component={Signup}
        options={{ headerTitleAlign: "center", headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
