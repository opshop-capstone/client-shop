import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ItemCard } from "../components";

const popularSearchTerms = ["폴로", "칼하트", "악세사리", "가방"];

const recentlyViewedProducts = [
  {
    id: "1",
    name: "Nike Air Max 270 React",
  },
  {
    id: "2",
    name: "adidas Originals NMD_R1",
  },
  {
    id: "3",
    name: "Converse Chuck Taylor All Star",
  },
];

const SearchPage = () => {
  const [recentlyViewed, setRecentlyViewed] = useState(recentlyViewedProducts);
  useEffect(() => {
    console.log(recentlyViewed);
  }, []);

  const renderPopularSearchTerm = ({ item }) => (
    <TouchableOpacity style={{ marginRight: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item}</Text>
    </TouchableOpacity>
  );

  const renderRecentlyViewedProduct = ({ item }) => (
    <TouchableOpacity style={{ marginRight: 10 }}>
      <Image
        source={item.image}
        style={{ width: 100, height: 100, resizeMode: "cover" }}
      />
      <Text style={{ fontSize: 16 }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <ScrollView>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            인기 검색어
          </Text>
          <FlatList
            data={popularSearchTerms}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderPopularSearchTerm}
          />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            최근 본 상품
          </Text>

          {recentlyViewed.map((a, i) => {
            return (
              <ItemCard
                url="https://ifh.cc/g/M2TJZp.png"
                productTitle="상품명"
                shopName="상점명"
              />
            );
          })}

          <FlatList
            data={recentlyViewed}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              <ItemCard
                url="https://ifh.cc/g/M2TJZp.png"
                productTitle="상품명"
                shopName="dd"
              />;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchPage;
