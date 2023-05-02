import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import styled from "styled-components";
import { ItemContext } from "../contexts";
import { Button } from "../components";

const TotalPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: #111;
`;
const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState("orderHistory");
  const { cartItems, setCartItems } = useContext(ItemContext);
  let sum = 0;

  cartItems.map((item) => {
    sum += parseFloat(item.price);
  });
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "orderHistory" && styles.activeTab]}
          onPress={() => handleTabChange("orderHistory")}
        >
          <Text style={styles.tabText}>주문 내역</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "shippingTracking" && styles.activeTab,
          ]}
          onPress={() => handleTabChange("shippingTracking")}
        >
          <Text style={styles.tabText}>배송 조회</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "orderCancellation" && styles.activeTab,
          ]}
          onPress={() => handleTabChange("orderCancellation")}
        >
          <Text style={styles.tabText}>주문 취소</Text>
        </TouchableOpacity>
      </View>
      {/* Render content based on the selected tab */}
      {activeTab === "orderHistory" && (
        <View style={styles.container}>
          <Card containerStyle={styles.card}>
            <TotalPrice>
              <Card.Title style={styles.cardTitle}>
                주문 번호 : 12312313
              </Card.Title>
              <Text style={styles.cardText}>2023/05/03</Text>
            </TotalPrice>
            <Card.Divider />
            <StyledText>
              상품 : {cartItems[0].name} 외 {cartItems.length - 1}개
            </StyledText>
            <StyledText>가격 : {(sum + 3000).toLocaleString()}원</StyledText>
            <TotalPrice style={{ marginTop: 9 }}>
              <TouchableOpacity style={styles.deleteButton}>
                <Text style={{ color: "white" }}>배송조회</Text>
              </TouchableOpacity>
              <Text style={{ color: "green", fontWeight: "bold" }}>
                배송 중
              </Text>
            </TotalPrice>
          </Card>
        </View>
      )}
      {activeTab === "shippingTracking" && (
        <View>{/* Render shipping tracking content */}</View>
      )}
      {activeTab === "orderCancellation" && (
        <View>{/* Render order cancellation content */}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },

  cardText: {
    fontSize: 16,
    color: "grey",
  },
  deleteButton: {
    backgroundColor: "#111",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
export default OrderHistory;
