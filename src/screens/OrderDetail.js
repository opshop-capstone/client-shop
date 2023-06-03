import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { Card } from "react-native-elements";
import { UserContext } from "../contexts";
import { TouchableOpacity } from "react-native";
import { ColorfulText } from "../components";

const OrderDetail = ({ route }) => {
  const { orderId } = route.params;
  const { user } = useContext(UserContext);
  const [orderInfo, setOrderInfo] = useState([]);
  const [orderStatus, setOrderStatus] = useState("");

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://opshop.shop:3000/opshop/stores/2/ordered-detail/${orderId}`,
        headers: {
          "x-access-token": `${user?.jwt}`,
        },
      })
        .then(function (response) {
          const result = response.data.result;
          if (result) {
            setOrderInfo(...result);
            setOrderStatus(result[0].status);
            switch (result[0].status) {
              case "PREPARE":
                setSelectedButton(1);
                break;
              case "DELIVERING":
                setSelectedButton(2);

                break;
              case "DELIVERD":
                setSelectedButton(3);

                break;
              case "CANCELING":
                setSelectedButton(4);

                break;
              case "CANCELED":
                setSelectedButton(5);

                break;
              default:
                break;
            }
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
  }, [selectedButton]);

  const handleStatus = async (orderStatus) => {
    await axios({
      method: "post",
      url: `http://opshop.shop:3000/opshop/stores/2/order-update/${orderId}`,
      headers: {
        "x-access-token": `${user?.jwt}`,
      },
      params: {
        ///////버전 1
        status: orderStatus,
      },
    })
      .then((response) => {
        if (response) {
          console.log(response.data);
          setOrderStatus(orderStatus);
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
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonPress = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.cardTitle}>주문 정보</Text>
        <Card style={styles.orderCard}>
          <Text style={styles.cardLabel}>주문 번호:</Text>
          <Text style={styles.cardValue}>{orderInfo.order_id}</Text>
          <Text style={styles.cardLabel}>주문 일자:</Text>
          <Text style={styles.cardValue}>{orderInfo.order_date}</Text>
          <Text style={styles.cardLabel}>주문 상태:</Text>
          {/* {<Text style={styles.cardValue}>{orderStatus}</Text>} */}
          <ColorfulText value={orderStatus}></ColorfulText>
        </Card>
        <Text style={styles.cardTitle}>주문 상품</Text>
        <Card style={styles.productCard}>
          <Text style={styles.cardLabel}>상품명 :</Text>
          <Text style={styles.cardValue}>{orderInfo.title}</Text>
          <Text style={styles.cardLabel}>수령인 :</Text>
          <Text style={styles.cardValue}>{orderInfo.orderer} 님</Text>
          <Text style={styles.cardLabel}>배송지:</Text>
          <Text style={styles.cardValue}>
            {orderInfo.road_address}, {orderInfo.detail_address}
          </Text>
          <Text style={styles.cardLabel}>가격:</Text>
          <Text style={styles.cardValue}>
            {orderInfo.price}
            {/* {orderInfo.price.toLocaleString()}원 */}
          </Text>
        </Card>
      </ScrollView>
      <View style={styles.buttonContainer}>
        {[
          { id: 1, title: "배송준비중", status: "PREPARE" },
          { id: 2, title: "배송중", status: "DELIVERING" },
          { id: 3, title: "배송완료", status: "DELIVERD" },
          { id: 4, title: "주문취소중", status: "CANCELING" },
          { id: 5, title: "취소완료", status: "CANCELED" },
        ].map((a, i) => {
          return (
            <TouchableOpacity
              style={[
                styles.button,
                selectedButton === a.id ? styles.selectedButton : null,
              ]}
              key={i}
              onPress={() =>
                Alert.alert(
                  `'${a.title}'` + "로 주문 상태를 변경하시겠어요?",
                  "맞으시면 '변경'을 눌러주세요.",
                  [
                    {
                      text: "아니요",
                      onPress: () => {
                        console.log("아니래");
                      },
                      style: "cancel",
                    },
                    {
                      text: "변경",
                      onPress: () => {
                        handleButtonPress(a.id);
                        handleStatus(a.status);
                        console.log(orderStatus);
                      },
                    },
                  ]
                )
              }
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === a.id ? styles.selectedButtonText : null,
                ]}
              >
                {a.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    margin: 20,
    elevation: 3,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  cardLabel: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardValue: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    overflow: "auto",
    flexWrap: "wrap",
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  selectedButton: {
    backgroundColor: "black",
  },
  selectedButtonText: {
    color: "white",
  },
});

export default OrderDetail;
