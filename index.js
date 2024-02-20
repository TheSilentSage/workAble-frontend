// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa0aQquKqjm-Gwhsoi-RBhcsWSQeZB538",
  authDomain: "workable-3a943.firebaseapp.com",
  projectId: "workable-3a943",
  storageBucket: "workable-3a943.appspot.com",
  messagingSenderId: "887827125723",
  appId: "1:887827125723:web:44f874129701748519c3fe",
  measurementId: "G-99KZ5DCSM5"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { doc, getDoc } from "firebase/firestore";
async function getUser(cityName){
    const docRef = doc(db, "cities", cityName);
    const docSnap = await getDoc(docRef);
    

    if (docSnap.exists()) {
            console.log("Document data:",docSnap.data());
            return docSnap.data();
} 
else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
  return docSnap.data();
}


}

getUser("SF");







/*import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

// Add a second document with a generated ID.

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

import { getDocs } from "firebase/firestore"; 

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});*/







/*const url = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    };

    fetchUsers().then(users => {
        users.map(user => {
            console.log(user.company.name);
        });
    });*/






