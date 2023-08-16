// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { auth, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "./a.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCbh8mSIAKBFC4oXoTscLgrnXRbujmXEQU",
//     authDomain: "hakathon-practice.firebaseapp.com",
//     projectId: "hakathon-practice",
//     storageBucket: "hakathon-practice.appspot.com",
//     messagingSenderId: "196171728036",
//     appId: "1:196171728036:web:b8afb89710629a473fd231",
//     measurementId: "G-PVD3BSSS5X"
//   };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const btn = document.getElementById("btn")

btn.addEventListener('click', () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Sign In Existing User
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User Log In:", user);
    window.location.href="./index.html"
    // if(window.location == './index.html'){

    // }

             // sendEmailVerification(auth.currentUser)
                // .then(() => {
                   
                    // onAuthStateChanged(auth, (user) => {
                    //     if (user.emailVerified === true) {
                    //         const uid = user.uid;
                    //         console.log(uid)
                    //         window.location.href = "./index.html"
                    //     // } else {
                    //     //     Swal.fire({
                    //     //         title: `Verify Account!`,
                    //     //         text: `Please See Gmail `,
                    //     //         icon: 'error',
                    //     //         confirmButtonText: 'OK'
                    //     //     });
                    //     // }
                    // }
                    // );

// ye verification ka brackets he //

                // });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("ErrorCode LogIn:", errorCode);
            console.log("ErrorMessage LogIn:", errorMessage);}) })
//            
// ye fuzool he
// 
// 
// if (errorCode == "auth/invalid-email" && errorMessage == "Firebase: Error (auth/invalid-email).") {
//                 Swal.fire({
//                     title: `Email`,
//                     text: `Please Enter Email `,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             else if (errorCode == "auth/user-not-found" && errorMessage == "Firebase: Error (auth/user-not-found).") {
//                 Swal.fire({
//                     title: `User`,
//                     text: `User Not Found `,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             else if (errorCode == "auth/missing-password" && errorMessage == "Firebase: Error (auth/missing-password).") {
//                 Swal.fire({
//                     title: `Password`,
//                     text: `Please Enter Password`,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             else if (errorCode == "auth/wrong-password" && errorMessage == "Firebase: Error (auth/wrong-password).") {
//                 Swal.fire({
//                     title: `Password`,
//                     text: `Please Enter Right Password`,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             else if (errorCode == "auth/network-request-failed" && errorMessage == "Firebase: Error (auth/network-request-failed).") {
//                 Swal.fire({
//                     title: `Network Error`,
//                     text: `Please Connect Network!`,
//                     icon: 'error',
//                     confirmButtonText: 'OK'
//                 });
//             }
//             else {
//                 Swal.fire({
//                     title: `Email`,
//                     text: `Account Matched `,
//                     icon: 'success',
//                     confirmButtonText: 'OK'
//                 });
//             }
        // });