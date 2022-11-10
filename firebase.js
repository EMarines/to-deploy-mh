// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDoc, getDocs, onSnapshot, getFirestore, orderBy, limit } from 'firebase/firestore'
import{ getAuth } from 'firebase/auth';
// import { $todo } from './src/stores/stores';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Declaraciones

  export let dbContacts = [];
  export let dbBinnacle = [];
  export let dbProperties = [];
  export let dbTodos = [];

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGi3ndUC1b4SFNstliSSVryu7_ymXEkZc",
  authDomain: "match-home-7d1f9.firebaseapp.com",
  databaseURL: "https://match-home-7d1f9-default-rtdb.firebaseio.com",
  projectId: "match-home-7d1f9",
  storageBucket: "match-home-7d1f9.appspot.com",
  messagingSenderId: "747751099607",
  appId: "1:747751099607:web:29d1e5beda87c847dfb492"
};

// Initialize Firebase
const database = initializeApp(firebaseConfig);

export  const db = getFirestore(database);
export const auth = getAuth(database)

// export const obteTareas = () => getDocs(collection(db, 'todos')) 


// export const onGetTask = (callBack) => onSnapshot(collection(db, 'todos'), callBack);

// export {
//    onSnapshot,
//    collection,
// }


// @ts-ignore
const bitacora = collection(db, "binnacles")
const contactos = collection(db, "contacts")
const propiedades = collection(db, "properties")
const tareas = collection(db, "todos")

function getBinnacles() {
  getDocs(bitacora)
  .then((response) => {
     return  dbBinnacle = response.docs.map((item) => {
        return {... item.data()};
     })
  })
};

(() => {
  getDocs(bitacora)
  .then((response) => {
     // @ts-ignore
      return dbBinnacle = response.docs.map((item) => {
        return {... item.data(), id: item.id};
     })
  })
})();

(() => {
getDocs(contactos)
.then((response) => {
   return dbContacts = response.docs.map((item) => {
      return {... item.data(), id: item.id};
   })
})
})();

(() => {
getDocs(propiedades)
.then((response) => {
   return dbProperties = response.docs.map((item) => {
      return {... item.data(), id: item.id};
   })
})
})();

(() => {
getDocs(tareas)
.then((response) => {
   return dbTodos = response.docs.map((item) => {
      return {... item.data(), id: item.id};
   })
 }) 

})();


// export function obteTareas(){
//   getDocs(tareas)
//    .then((response) => {
//       return dbTodos = response.docs.map((item) => {
//          return {... item.data(), id: item.id};
//       })
//    }) 
// }
   
 

