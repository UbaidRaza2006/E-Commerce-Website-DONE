import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
import { collection, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getDownloadURL , getStorage,ref} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
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


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

console.log("adkjahsj");
const getdata = async () => {
    const querySnapshot = await getDocs(collection(db, "prodcuts"));

    querySnapshot.forEach((doc) => {
        getDownloadURL(ref(storage, `${doc.data().price}${doc.data().name}${doc.data().description}`))
            .then((url) => {
                document.getElementById('products').innerHTML += `
                

               
                    `
                    window.location.href="./index.html"
            })
            .catch((error) => {
                // Handle any errors
            });
    });
}
getdata()
