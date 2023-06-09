import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts";
import { Button, Input } from "../components";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import axios from "axios";

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

const ItemContainer = styled.View`
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  flex-wrap: wrap;
`;
const OpMain = ({ navigation }) => {
  const { user, setUserInfo } = useContext(UserContext);
  const [shopInfo, setShopInfo] = useState([]);
  const [shopId, setShopId] = useState(true);
  const shopProfile = (id) => {
    try {
      axios({
        method: "get",
        url: `http://opshop.shop:3000/opshop/stores/${id}/info`,
        headers: {
          "x-access-token": `${user?.jwt}`,
        },
      })
        .then(function (response) {
          const result = response.data.result;
          if (result) {
            setShopInfo(result[0]);
            console.log(result);
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log("error");
          alert(error);
        });
    } catch (e) {
      console.log(e);
      alert(e);
    } finally {
      return () => {
        isMount = false;
      };
    }
  };
  return (
    <Container>
      <ItemContainer>
        <TouchableOpacity
          style={[styles.button, shopId && styles.activeButton]}
          onPress={() => {
            setShopId(true);
            shopProfile(6);
          }}
        >
          <Text style={styles.buttonText}>SUGANG_VINTAGE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, !shopId && styles.activeButton]}
          onPress={() => {
            setShopId(false);
            shopProfile(2);
          }}
        >
          <Text style={styles.buttonText}>VINTAGE TALK</Text>
        </TouchableOpacity>
      </ItemContainer>

      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            source={{ uri: shopInfo.store_thumbnail }}
            style={styles.profileImg}
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{shopInfo.store_name}</Text>
          <Text style={styles.email}>{user.userEmail}</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("OrderHistory")}
        >
          <Text style={styles.cardText}>주문 관리</Text>
          <StyledText>주문된 상품을 관리</StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("ProductManager")}
        >
          <Text style={styles.cardText}>상품 관리</Text>
          <StyledText>전체 상품 리스트 노출 / 미노출 및 판매 관리</StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Shop", { storeId: 6 })}
        >
          <Text style={styles.cardText}>상점 관리</Text>
          <StyledText>상점 정보를 변경 / 관리</StyledText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>문의 및 후기 관리</Text>
          <StyledText>고객 상품 문의 및 후기 확인</StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => console.log("My Inquiry")}
        >
          <Text style={styles.cardText}>통계</Text>
          <StyledText>방문/가입/구매 등 운영 내역 및 통계확인</StyledText>
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
  activeButton: {
    backgroundColor: "black",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default OpMain;
