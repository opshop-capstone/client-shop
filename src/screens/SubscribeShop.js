import React from "react";
import styled from "styled-components";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

const SUBSCRIBED_STORES = [
  { id: 1, name: "상점1", imageUrl: "https://placehold.it/150x150" },
  { id: 2, name: "상점2", imageUrl: "https://placehold.it/150x150" },
  { id: 3, name: "상점3", imageUrl: "https://placehold.it/150x150" },
  { id: 4, name: "상점4", imageUrl: "https://placehold.it/150x150" },
  { id: 5, name: "상점5", imageUrl: "https://placehold.it/150x150" },
];

const NEW_PRODUCTS = [
  {
    id: 1,
    storeId: 1,
    name: "상품1",
    imageUrl: "https://placehold.it/300x150",
  },
  {
    id: 2,
    storeId: 1,
    name: "상품2",
    imageUrl: "https://placehold.it/300x150",
  },
  {
    id: 3,
    storeId: 2,
    name: "상품3",
    imageUrl: "https://placehold.it/300x150",
  },
  {
    id: 4,
    storeId: 3,
    name: "상품4",
    imageUrl: "https://placehold.it/300x150",
  },
  {
    id: 5,
    storeId: 4,
    name: "상품5",
    imageUrl: "https://placehold.it/300x150",
  },
  {
    id: 6,
    storeId: 5,
    name: "상품6",
    imageUrl: "https://placehold.it/300x150",
  },
];

const SubscribeShop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subscribedStoresContainer}>
        <FlatList
          data={SUBSCRIBED_STORES}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.storeItemContainer}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.storeItemImage}
              />
              <Text style={styles.storeItemName}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.newProductsContainer}>
        <Text style={styles.newProductsTitle}>구독한 매장의 신상품!</Text>
        <ScrollView>
          {NEW_PRODUCTS.map((product) => (
            <View key={product.id} style={styles.newProductItemContainer}>
              <Image
                source={{ uri: product.imageUrl }}
                style={styles.newProductItemImage}
              />
              <Text style={styles.newProductItemName}>{product.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  subscribedStoresContainer: {
    height: 100,
    marginBottom: 16,
  },
  storeItemContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  storeItemImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    height: 60,
    borderRadius: 30,
  },
  storeItemName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  newProductsContainer: {
    flex: 1,
  },
  newProductsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  newProductItemContainer: {
    marginRight: 16,
    width: 150,
    height: 200,
  },
  newProductItemImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  newProductItemName: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SubscribeShop;
