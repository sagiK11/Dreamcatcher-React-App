import firebase from "firebase"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAyoIR6Ax4rrvFhAIWl4WeRfKo746z9RE0",
    authDomain: "dream-8ba38.firebaseapp.com",
    databaseURL: "https://dream-8ba38.firebaseio.com",
    projectId: "dream-8ba38",
    storageBucket: "dream-8ba38.appspot.com",
    messagingSenderId: "372094073500",
    appId: "1:372094073500:web:cf807c4edef6413a218b59",
    measurementId: "G-7278QBT7QY"
};
firebase.initializeApp(firebaseConfig);

export default firebase;

