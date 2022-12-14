import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyDYsRHVDgo9928MyJJQ-gYpMrbydm5Dx10",
  authDomain: "diary-7b76b.firebaseapp.com",
  projectId: "diary-7b76b",
  storageBucket: "diary-7b76b.appspot.com",
  messagingSenderId: "868908846136",
  appId: "1:868908846136:web:1306c26728d160c8116acd",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { db };
