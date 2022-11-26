import {db } from '../../../firebase';
import { collection, deleteDoc, doc, addDoc, updateDoc} from 'firebase/firestore';
import { binnacle, property, contact, systStatus } from '../../stores/stores'


   export async function binnSave($systStatus, binn){
      if($systStatus === "binnAdding"){
         console.log($systStatus, binn);
         const binnacleToAdd = collection(db, "binnacles")
         await addDoc(binnacleToAdd, binn);
      } else if($systStatus === "binnacleUpdate") {
         // await updateDoc(doc(db, "binnacles", $binnacle.id), $binnacle)
         // editStatus = false;
      } else if($systStatus === "binnacleDelete") {
         // await deleteDoc(doc(db, "binnacles", $binnacle.id))
      }
      binn = [];
   }

   // PROYECTO, TODOS LAS BITACORAS GUARDARLAS DESDE AQUÍ****************
    // Guarda en bitácora la propiedad enviada
         // export function sendProperty(contChecked, $property){
         //    console.log($property);
         //    let proSent = $property.claveEB
         //    $systStatus = "binnAdding"
         //    let propertyL = dbProperties.filter((item) => item.urlProp === contChecked[0])
         //    // $property = propertyL[0]
         //    if($modeAction === "sendMsg"){
         //       $binnacle = {"date": Date.now(), "comment": contChecked, "to": $contact.telephon, "action": "Mensaje enviado: "}
         //    } else if ($modeAction === "sendProperties"){
         //       $binnacle = {"date": Date.now(), "comment": $property.claveEB, "to": contChecked, "action": "Enviada desde propiedad: "}
         //       console.log($binnacle);
         //    }else {
         //       $binnacle = {"date": Date.now(), "comment": $property.claveEB, "to": $contact.telephon, "action": "Propiedad enviada: "}
         //    }
         //    // binnSave($systStatus, $binnacle )
         //    $modeAction = "";
         //    $systStatus = "contSelect"
         // };
