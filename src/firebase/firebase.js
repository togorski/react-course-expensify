import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// child_removed
// database.ref("expense").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses")
//   .on("value", (snapshot) => {
//     let expenses = []
    
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
       
//      id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
//   })
// database.ref("expenses").push({
//     description: "electricity bill",
//     note: "no note",
//     amount: 1434,
//     createdAt: 704045035
// })

// database.ref("expenses").push({
//     description: "phone bill",
//     note: "lalla",
//     amount: 3000,
//     createdAt: 34323424
// })

// database.ref("expenses").push({
//     description: "sweets",
//     note: "no note",
//     amount: 2020,
//     createdAt: 33344453
// })