import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbh8mSIAKBFC4oXoTscLgrnXRbujmXEQU",
  authDomain: "hakathon-practice.firebaseapp.com",
  projectId: "hakathon-practice",
  storageBucket: "hakathon-practice.appspot.com",
  messagingSenderId: "196171728036",
  appId: "1:196171728036:web:b8afb89710629a473fd231",
  measurementId: "G-PVD3BSSS5X"
};


const email= document.getElementById("email").value
  const password= document.getElementById("password").value
  const auth = getAuth();
  let btn = document.getElementById('btn')
  //     console.log(btn);
      btn.addEventListener('click',signup)
      function signup(params) {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log('ok');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(error);
  });

      }
// import { getAuth, createUserWithEmailAndPasswordd } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 
//   const firebaseConfig = {
//     apiKey: "AIzaSyCbh8mSIAKBFC4oXoTscLgrnXRbujmXEQU",
//     authDomain: "hakathon-practice.firebaseapp.com",
//     projectId: "hakathon-practice",
//     storageBucket: "hakathon-practice.appspot.com",
//     messagingSenderId: "196171728036",
//     appId: "1:196171728036:web:b8afb89710629a473fd231",
//     measurementId: "G-PVD3BSSS5X"
//   };
  
  
//     // const app = initializeApp(firebaseConfig);
//     // const analytics = getAnalytics(app);
//     // const auth = getAuth();
//     let btn = document.getElementById('btn')
//     console.log(btn);
//     btn.addEventListener('click',signup)
    
//     const auth = getAuth();
//     function signup(){
// 



//   // const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
//   // createUserWithEmailAndPassword(auth, email, password)
//   //   .then((userCredential) => {
//   //     // Signed in 
//   //     const user = userCredential.user;
//   //     // ...
//   //   })
//   //   .catch((error) => {
//   //     const errorCode = error.code;
//   //     const errorMessage = error.message;
//   //     // ..
//   //   });
// }







  
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
//   }

// window.signup=signup()