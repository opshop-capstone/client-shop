// // import * as firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // import firebaseConfig from "../firebase.json";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCUt0BBxLlRUHuwGgzH3B3_eeKAha90DKM",
//   authDomain: "op-shop-item-image.firebaseapp.com",
//   projectId: "op-shop-item-image",
//   storageBucket: "op-shop-item-image.appspot.com",
//   messagingSenderId: "60786360176",
//   appId: "1:60786360176:web:7374ab5eaf7e86ee4e19b5",
//   measurementId: "G-47G07C0ZVL",
// };

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// //// 어떤사람이 해결된다고 했던..
// export async function uploadImage(uri) {
//   let date = new Date();
//   let getTime = date.getTime();
//   const response = await fetch(uri);
//   const blob = await response.blob();
//   const storage = getStorage(app);
//   const storageRef = ref(storage, `images/${getTime}`);
//   // 'file' comes from the Blob or File API
//   uploadBytes(storageRef, blob).then((snapshot) => {
//     getDownloadURL(snapshot.ref).then((url) => {
//       // console.log(url)
//       return url;
//     });
//   });
// }
