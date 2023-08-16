import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase prod+ucts that you want to use
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

onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("name").innerHTML = user.email
        document.getElementById("name").href = ""
    } else {

    }
})

var signout2 = document.getElementById("signout").addEventListener("click", ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        document.getElementById("headlessui-menu-button-1").innerHTML = "Sign In";
        window.location.href="./index.html"
    }).catch((error) => {
        // An error happened.
        console.log(error,"logout error");
    });
})


{/* <div class="flex flex-col">
                                <div class="group cursor-pointer" href="/product/naruto-itachi-print-t-shirt">
                                    <div class="relative w-full h-80 md:h-auto rounded-lg overflow-hidden"><span
                                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative"><span
                                                style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:166.66666666666669%"></span><img
                                                alt="" src="./image2.webp" decoding="async" data-nimg="responsive"
                                                class="w-full h-full object-center object-cover hover:opacity-75"
                                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"><noscript><img
                                                    alt="" sizes="100vw"
                                                    srcSet="/_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fitemimages%2Faltitemzoom%2F951033s.jpg%3Fim%3DResize%2Cwidth%3D364&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fitemimages%2Faltitemzoom%2F951033s.jpg%3Fim%3DResize%2Cwidth%3D364&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fitemimages%2Faltitemzoom%2F951033s.jpg%3Fim%3DResize%2Cwidth%3D364&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fitemimages%2Faltitemzoom%2F951033s.jpg%3Fim%3DResize%2Cwidth%3D364&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fitemimages%2Faltitemzoom%2F951033s.jpg%3Fim%3DResize%2Cwidth%3D364&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fitemimages%2Faltitemzoom%2F951033s.jpg%3Fim%3DResize%2Cwidth%3D364&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fitemimages%2Faltitemzoom%2F951033s.jpg%3Fim%3DResize%2Cwidth%3D364&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fitemimages%2Faltitemzoom%2F951033s.jpg%3Fim%3DResize%2Cwidth%3D364&amp;w=3840&amp;q=75 3840w"
                                                    src="/_next/image?url=https%3A%2F%2Fxcdn.next.co.uk%2Fcommon%2Fitems%2Fdefault%2Fdefault%2Fitemimages%2Faltitemzoom%2F951033s.jpg%3Fim%3DResize%2Cwidth%3D364&amp;w=3840&amp;q=75"
                                                    decoding="async" data-nimg="responsive"
                                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                                                    class="w-full h-full object-center object-cover hover:opacity-75"
                                                    loading="lazy" /></noscript></span></div>
                                    <h3 class="mt-4 text-sm text-gray-700 line-clamp-1 hover:text-gray-900">Naruto
                                        Itachi Print T-shirt</h3>
                                    <div class="flex items-center gap-x-1"><svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                            class="text-gray-300 h-5 w-5 flex-shrink-0">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>No Reviews</div>
                                    <p class="mt-1 text-lg font-medium text-gray-900">₹<!-- -->1700</p>
                                </div><button
                                    class="relative flex bg-gray-200 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-300">Add
                                    to bag</button>
                            </div> */}  