// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js"

const firebaseConfig = {
apiKey: "AIzaSyA0ipaKhwhrSnO04RouckjT5ewTYzfBXbM",
authDomain: "lumamate-d719f.firebaseapp.com",
projectId: "lumamate-d719f",
storageBucket: "lumamate-d719f.appspot.com",
messagingSenderId: "904027515756",
appId: "1:904027515756:web:9976b80d6117cd043a6149"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)