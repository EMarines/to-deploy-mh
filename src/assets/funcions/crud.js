import { collection, addDoc, deleteDoc, getDoc, getDocs, doc, updateDoc, setDoc, getFirestore } from 'firebase/firestore'

// Elimina la tarea
 export async function deleteItems(db, id, collection) {
   let confDelete = confirm("Quieres borrarlo definitivmente?")
   if(confDelete == true){
      console.log(id)
      await deleteDoc(doc(db, collection, id))           
   };
   // taskForm.reset();   // Borra el form por su id
};