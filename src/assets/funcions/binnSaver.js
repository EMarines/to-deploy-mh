import {db } from '../../../firebase';
import { collection, deleteDoc, doc, addDoc, updateDoc} from 'firebase/firestore';
import { binnacle } from '../../stores/stores'


   export async function binnSave($systStatus, $binnacle){
      if($systStatus === "binnAdding"){
         console.log($binnacle);
         const binnacleToAdd = collection(db, "binnacles")
         await addDoc(binnacleToAdd, $binnacle);
      } else if($systStatus === "binnacleUpdate") {
         console.log("Se editó a: ", $binnacle.comment, $binnacle.to);
         // await updateDoc(doc(db, "binnacles", $binnacle.id), $binnacle)
         // editStatus = false;
      } else if($systStatus === "binnacleDelete") {
         console.log("Se eliminó a: ", $binnacle.to);
         // await deleteDoc(doc(db, "binnacles", $binnacle.id))
      }
      $binnacle = [];
   }