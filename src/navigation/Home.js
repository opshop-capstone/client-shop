import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { OpMain, Profile, Cart, Category, SubscribeShop } from "../screens";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Main } from "./index";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, focused }) => {
  const theme = useContext(ThemeContext);
  return (
    <Ionicons
      name={name}
      size={26}
      color={focused ? theme.tabBtnActive : theme.tabBtnInactive}
    />
  );
};
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name=" "
        component={OpMain}
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({ name: focused ? "home" : "home-outline", focused }),
        }}
      />
      <Tab.Screen
        name="    "
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({ name: focused ? "cart" : "cart-outline", focused }),
        }}
      />
      <Tab.Screen
        name="   "
        component={SubscribeShop}
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({ name: focused ? "heart" : "heart-outline", focused }),
        }}
      />
      <Tab.Screen
        name="     "
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            TabIcon({ name: focused ? "person" : "person-outline", focused }),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
