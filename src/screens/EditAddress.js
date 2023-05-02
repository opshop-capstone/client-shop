import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { Card } from "react-native-elements";
import styled from "styled-components";
import { Button, CustomButton, Checkbox } from "../components";
import { ItemContext } from "../contexts";
import { Ionicons } from "@expo/vector-icons";
const FixContainer = styled.View`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalPrice = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
  align-items: center;
`;

const ButtonIcon = styled(Ionicons).attrs({
  name: "pencil",
  size: 22,
  marginRight: 20,
})`
  color: ${({ theme }) => theme.text};
`;
const CheckButtonIcon = styled(Ionicons).attrs({
  name: "checkmark-circle",
  size: 60,
})`
  color: green;
`;

const StyledText = styled.Text`
  font-size: 18px;
  color: #111;
  font-weight: 600;
  margin: 5px;
`;

const EditAddress = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    setShowModal(true);
  };

  const handleMoveToCart = () => {
    console.log("Navigating to Cart");
    setShowModal(false);
  };

  const handleContinueShopping = () => {
    setShowModal(false);
  };
  const [showModal2, setShowModal2] = useState(false);

  const handleAddToCart2 = () => {
    setShowModal2(true);
  };

  const handleMoveToCart2 = () => {
    console.log("Navigating to Cart");
    setShowModal2(false);
  };

  const handleContinueShopping2 = () => {
    setShowModal2(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StyledText>회원 정보</StyledText>
        <Card containerStyle={styles.card}>
          <TotalPrice
            onPress={() => {
              handleAddToCart();
            }}
          >
            <Text style={styles.cardTitle}>박상호</Text>
            <ButtonIcon />
          </TotalPrice>
          <Card.Divider />
          <Text style={styles.cardText}>Email : email@example.com </Text>
          <Text style={styles.cardText}>PW : ************* </Text>
        </Card>
        <StyledText>배송지</StyledText>
        <Card containerStyle={styles.card}>
          <TotalPrice
            onPress={() => {
              handleAddToCart();
            }}
          >
            <Text style={styles.cardTitle}>본가</Text>
            <ButtonIcon />
          </TotalPrice>
          <Card.Divider />
          <Text style={styles.cardText}>
            인천광역시 미추홀구 주승로 96번길 42 주안한신휴플러스 201동, 407호
          </Text>
          <Checkbox title="해당 배송지 사용하기" def={false} />
        </Card>
      </ScrollView>
      <Button
        onPress={handleAddToCart2}
        title="배송지 추가하기"
        containerStyle={styles.button}
      />
      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <StyledText style={{ fontSize: 20, fontWeight: "bold" }}>
            결제수단 변경하기
          </StyledText>
          <Image
            style={{ width: 100, height: 100, borderRadius: 10, marginTop: 30 }}
            source={require("../../assets/kakao-pay.png")}
          />
          <StyledText>Kakao Pay</StyledText>
          <View style={styles.modalButtonsContainer}>
            <Button title="변경" onPress={handleContinueShopping} />
            <Button
              title="결제수단 유지하기"
              containerStyle={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#000",
              }}
              textStyle={{ color: "#111" }}
              onPress={() => {
                handleContinueShopping();
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f1f1f1",
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  cardText: {
    marginTop: 15,
    fontSize: 16,
    color: "grey",
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 30,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonsContainer: {
    justifyContent: "space-between",
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
});

export default EditAddress;
