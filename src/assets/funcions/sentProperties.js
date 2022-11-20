import { dbBinnacle } from '../../../firebase'
// import { contact } from '../../stores/stores'

let bitacora = [];
let bit=[];

export function sendProperties($contact){
   bitacora = dbBinnacle.filter(item => item.to === $contact.telephon)
   let bitT = bitacora.filter(item => item.action === "Propiedad enviada: ")
   // bitT.forEach(item => console.log(item.comment))
   bitT.forEach(item => bit.push(item.comment))
   console.log(bit);
 };

