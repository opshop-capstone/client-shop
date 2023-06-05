import React, { useState, useContext, useEffect } from "react";
import { ProgressContext, UserContext } from "../contexts";
import {
  Button,
  CustomButton,
  Input,
  ShopCard,
  Category,
  PopularProducts,
  ItemCard,
} from "../components";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  padding: 10px;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: #111;
  font-weight: 600;
  margin-bottom: 15px;
`;

const BoxContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Contour = styled.View`
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.imgBackground};
`;

const LowContainer = styled.View`
  position: sticky;
  margin: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  flex-wrap: wrap;
`;
const DeleteItem = ({ route, navigation }) => {
  const { user } = useContext(UserContext);
  const [shopItem, setShopItem] = useState([]);
  const [deleteItem, setDeleteItem] = useState(true);
  useEffect(() => {
    try {
      // 왜 response.data.result값이 undefined가 오는거지
      axios
        .get("http://opshop.shop:3000/opshop/stores/6")

        .then(function (response) {
          const result = response.data.result;
          if (result) {
            setShopItem(result);
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
  }, [deleteItem]);

  // 상품 삭제 요청

  const handleDelete = async (productId) => {
    await axios({
      method: "post",
      url: `http://opshop.shop:3000/opshop/stores/6/product-delete/${productId}`,
      headers: {
        "x-access-token": `${user?.jwt}`,
      },
    })
      .then((response) => {
        if (response) {
          setDeleteItem(!deleteItem);
        } else {
          alert("Error", response.data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.name);
        console.log(err.stack);

        alert("주문하기 실패");
      });
  };
  //////////찜한 상품 로드
  const [likedProducts, setLikedProducts] = useState([]);

  const [refresh, setRefresh] = useState(1);

  const { spinner } = useContext(ProgressContext);

  ///////////////

  const { setUser } = useContext(UserContext);

  return (
    <Container>
      <ScrollView>
        <Contour />

        {shopItem.map((item, i) => {
          return (
            <View style={styles.card}>
              <View style={styles.likesContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleDelete(item.product_id)}
                >
                  <Text style={styles.buttonText}>삭제</Text>
                </TouchableOpacity>
              </View>
              <Image
                // source={require("../../assets/icon.png")}
                source={{ uri: item.product_thumbnail }}
                style={styles.productImage}
              />
              <View style={styles.detailsContainer}>
                <Text style={styles.productName}>{item.title}</Text>
                <Text style={styles.storeName}>d</Text>
                <Text style={styles.price}>{item.price}원</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  newProductsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 16,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  itemText: {
    fontSize: 16,
    color: "black",
  },
  refreshButton: {
    width: 30,
    height: 30,
    backgroundColor: "black",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  rowItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "auto",
    flexWrap: "wrap",
    marginVertical: 2,
    paddingHorizontal: 20,
  },
  newProductItemContainer: {
    marginRight: 16,
    width: 150,
    height: 200,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "grey",

    // 그림자
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  likesText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  styledText: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 15,
  },
  likesIcon: {
    width: 16,
    height: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: "contain",
    marginBottom: 5,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 20,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storeName: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "black",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DeleteItem;
