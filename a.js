import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
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

const btn = document.getElementById("btn")
console.log(btn);
btn.addEventListener("click", () => {

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email,password);


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;   
            // ...

         console.log(user);console.log('km hogaya');
            window.location.href="./logIn.html"

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
console.log(errorMessage);
        });

})

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth,signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged,}