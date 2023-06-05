import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts";
import uuid from "uuid";
import {
  Button,
  CustomButton,
  ItemAddImage,
  Input,
  ShopCard,
  ContentInput,
} from "../components";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert, FlatList, ScrollView, View } from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { uploadImage } from "../firebase";
/////
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// import firebaseConfig from "../firebase.json";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  padding: 10px;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 12px;
  color: #111;
  font-weight: 600;
  margin-bottom: 5px;
`;

const BoxContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;
const Contour = styled.View`
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.imgBackground};
  margin: 6px;
`;

const LowContainer = styled.View`
  position: sticky;
  margin: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const AddItem = ({ route, navigation }) => {
  const [url, setUrl] = useState("");
  const [urlArray, setUrlArray] = useState([]);
  const [photoList, setPhotoList] = useState([1]);
  const { user } = useContext(UserContext);

  const handleAdd = async (imageUrl) => {
    console.log(imageUrl);
    const detail_images = imageUrl.slice(0).join(",");
    await axios({
      method: "post",
      url: "http://opshop.shop:3000/opshop/stores/6/product-register",
      headers: {
        "x-access-token": `${user?.jwt}`,
      },
      data: {
        title: productTitle,
        price: price,
        content: content,
        categoryId: 1,
        size: size,
        thumbnail_image_url: imageUrl[0],
        product_image_url: detail_images,
      },
    })
      .then((response) => {
        if (response) {
          console.log(response.data);
        } else {
          alert("Error", response.data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err.name);
        console.log(err.stack);

        alert("상품추가 실패");
      });
  };
  ///////////////

  // const firebaseConfig = {
  //   apiKey: "AIzaSyCUt0BBxLlRUHuwGgzH3B3_eeKAha90DKM",
  //   authDomain: "op-shop-item-image.firebaseapp.com",
  //   projectId: "op-shop-item-image",
  //   storageBucket: "op-shop-item-image.appspot.com",
  //   messagingSenderId: "60786360176",
  //   appId: "1:60786360176:web:7374ab5eaf7e86ee4e19b5",
  //   measurementId: "G-47G07C0ZVL",
  // };

  const firebaseConfig = {
    apiKey: "AIzaSyDNIe6aOBoai33qvNubBySjrDF0lepm7To",
    authDomain: "op-item.firebaseapp.com",
    projectId: "op-item",
    storageBucket: "op-item.appspot.com",
    messagingSenderId: "943752852148",
    appId: "1:943752852148:web:50387b3e987649ca589de1",
    measurementId: "G-LNXMCKYQXP",
  };

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  ///////////////
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  //// 어떤사람이 해결된다고 했던..
  const uploadImage = async (uri) => {
    let date = new Date();
    let getTime = date.getTime();

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const fileRef = ref(getStorage(), uuid.v4());
    const result = await uploadBytes(fileRef, blob);

    // We're done with the blob, close and release it
    blob.close();

    const url = await getDownloadURL(fileRef);
    console.log(url);
    return url;
  };
  ///////////////

  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const pickImageAsync = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      // console.log(result.assets[0].uri);
      setPhotoList([
        ...photoList,
        { id: photoList.length, url: result.assets[0].uri },
      ]);
    } else {
      Alert.alert("선택 오류", "이미지가 선택되지 않았습니다.");
    }
  };

  const [productTitle, setProductTitle] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  return (
    <Container>
      <ScrollView>
        <FlatList
          data={photoList}
          keyExtractor={(item) => String(item.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemAddImage
              key={item.id}
              upload={item == 1 ? 1 : 0}
              thumbnail={item.id == 1 ? 1 : 0}
              onPress={pickImageAsync}
              url={`${item.url}`}
              onDelete={() => {
                Alert.alert(
                  item.id + "번째 상품을 삭제하시겠어요?",
                  "맞으시면 '삭제'를 눌러주세요.",
                  [
                    {
                      text: "아니요",
                      onPress: () => {
                        console.log("삭제 취소");
                      },
                      style: "cancel",
                    },
                    {
                      text: "삭제",
                      onPress: () => {
                        console.log(item.id);

                        setPhotoList(
                          photoList.filter((a) => {
                            return a.id !== item.id;
                          })
                        );
                      },
                    },
                  ]
                );
              }}
            />
          )}
        />
        {photoList.length > 1 ? (
          <></>
        ) : (
          <StyledText>
            상품사진을 등록하세요. 첫번째 사진은 상품 대표 사진으로 지정됩니다.
          </StyledText>
        )}

        <Contour />
        <ContentInput
          label="상품명"
          placeholder="상품명을 입력하세요"
          returnKeyType="next"
          value={productTitle}
          onChangeText={setProductTitle}
          onSubmitEditing={() => {}}
        />
        <ContentInput
          label="카테고리"
          placeholder="상의, 하의 등..."
          returnKeyType="next"
          value={category}
          onChangeText={setCategory}
        />
        <ContentInput
          label="가격"
          placeholder="가격을 입력하세요"
          returnKeyType="next"
          value={price}
          onChangeText={setPrice}
        />
        <ContentInput
          label="사이즈"
          placeholder="S, M, L, XL"
          returnKeyType="next"
          value={size}
          onChangeText={setSize}
        />
        <ContentInput
          label="상품설명"
          returnKeyType="done"
          value={content}
          onChangeText={setContent}
          multiline={true}
          style={{ height: 200 }}
        />
      </ScrollView>
      <Button
        title="test"
        onPress={() => {
          console.log(photoList);

          console.log("url 결과값 : " + url);
        }}
      />
      <Button
        title="상품 추가하기"
        onPress={() => {
          let testUrl = 0;
          Alert.alert(
            "상품을 추가하시겠어요?",
            "맞으시면 '추가'를 눌러주세요.",
            [
              {
                text: "아니요",
                onPress: () => {
                  console.log("아니래");
                },
                style: "cancel",
              },
              {
                text: "추가",
                onPress: async () => {
                  let list = [];
                  photoList.map(async (a, i) => {
                    if (i > 0) {
                      url = await uploadImage(a.url);
                      list.push(url);
                    }
                  });
                  setUrlArray(list);
                  await handleAdd(urlArray);
                },
              },
            ]
          );
        }}
      ></Button>
    </Container>
  );
};

export default AddItem;
