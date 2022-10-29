import {db } from '../../../firebase';
import { collection, deleteDoc, doc, addDoc, updateDoc} from 'firebase/firestore';
import { binnacle } from '../../stores/stores'


   export async function binnSave($systStatus, xyz){
      console.log("estas en la funcion")
      if($systStatus === "binnAdding"){
         const binnacleToAdd = collection(db, "binnacles")
         await addDoc(binnacleToAdd, xyz);
      } else if($systStatus === "binnacleUpdate") {
         // await updateDoc(doc(db, "binnacles", $binnacle.id), $binnacle)
         // editStatus = false;
      } else if($systStatus === "binnacleDelete") {
         // await deleteDoc(doc(db, "binnacles", $binnacle.id))
      }
      xyz = "";
      // $binnacle = [];
   }