import React, { useState, useContext } from "react";
import { UserContext } from "../contexts";
import { Button, Input } from "../components";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  margin-top: 3px;
  font-size: 14px;
  color: grey;
`;

const ProductManager = ({ navigation }) => {
  const { user, setUserInfo } = useContext(UserContext);
  return (
    <Container>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("AddItem")}
        >
          <Text style={styles.cardText}>상품 추가</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("EditItem")}
        >
          <Text style={styles.cardText}>상품 수정</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("DeleteItem")}
        >
          <Text style={styles.cardText}>상품 삭제</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 15,
  },
  profile: {
    borderWidth: 1,
    borderRadius: 50,
    overflow: "hidden",
  },
  profileImg: {
    width: 50,
    height: 50,
  },
  profileInfo: {
    alignItems: "flex-end",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  cardContainer: {
    width: "90%",
    flex: 1,
    marginHorizontal: 15,
  },
  card: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductManager;
