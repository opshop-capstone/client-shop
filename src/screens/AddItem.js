import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts";
import {
  Button,
  CustomButton,
  ItemAddImage,
  Input,
  ShopCard,
} from "../components";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert, FlatList, ScrollView, View } from "react-native";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { uploadImage } from "../firebase";

const Container = styled.View`
  flex: 1;
  flex-grow: 1;
  padding: 10px;
  background-color: ${({ theme }) => theme.background};
`;

const StyledText = styled.Text`
  font-size: 30px;
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
const AddItem = ({ route, navigation }) => {
  const [photo, setPhoto] = useState("");
  const [photoList, setPhotoList] = useState([1]);

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
      console.log(result.assets[0].uri);
      setPhotoList([...photoList, result.assets[0].uri]);
      setPhoto(result.assets[0].uri);
    } else {
      Alert.alert("선택 오류", "이미지가 선택되지 않았습니다.");
    }
  };
  return (
    <Container>
      <ScrollView>
        <FlatList
          data={photoList}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemAddImage
              upload={item == 1 ? 1 : 0}
              onPress={pickImageAsync}
              url={`${item}`}
            />
          )}
        />
        {/* <ItemAddImage
          url={
            "https://firebasestorage.googleapis.com/v0/b/op-shop-item-image.appspot.com/o/images%2F1685007902685?alt=media&token=cbb60fbc-c6e7-4ca5-8466-1b6a87eb3309"
          }
        /> */}
      </ScrollView>
      <Button
        title="상품 추가하기"
        onPress={() => {
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
                onPress: () => {
                  photoList.map((a, i) => {
                    if (i > 0) {
                      // console.log("좀되라");
                      uploadImage(a);
                    }
                  });

                  // const storage = getStorage();
                  // const storageRef = ref(storage, "some-child");

                  // // 'file' comes from the Blob or File API
                  // uploadBytes(storageRef, file).then((snapshot) => {
                  //   console.log("Uploaded a blob or file!");
                  // });

                  /////// 1차
                  // let date = new Date();
                  // let getTime = date.getTime();
                  // console.log(getTime);
                  // photoList.map(async (a, i) => {
                  //   if (i > 0) {
                  //     const response = await fetch(a);
                  //     const blob = await response.blob();
                  //     const imageUrl = await imageUpload(blob, getTime);
                  //     console.log(imageUrl);
                  //   }
                  // });
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
