
<script>
// @ts-nocheck

   // Importaciones
      import { db, dbContacts, dbProperties, dbBinnacle } from '../../firebase';
      import { Link, useNavigate } from "svelte-navigator";
      import { deleteDoc, doc, DocumentSnapshot} from 'firebase/firestore';
      import { property, conInterest, toRender } from '../stores/stores'
      import { filtPropContInte } from '../assets/funcions/filContacts'
      import { systStatus, contact, binnacle, modeAction } from '../stores/stores';
      import trash from '../assets/images/trash.svg'
      import edit from '../assets/images/edit.svg';
      import { construct_svelte_component_dev, debug } from 'svelte/internal';
      // import { $systStatus, binnacle, modeAction} from '../stores/stores'
      // import ContactCard from './CardProperty.svelte';
      // import { claim_space } from 'svelte/internal';
      // import { filtPropContInte } from '../assets/funcions/rangValue'

   // Declaraciones
      const navigate = useNavigate();
      let checkedContacts = [];
      let contChecked = [];
      let conInt = [];
      let currentId;
      let seeCont = false;
      let editStatus= false;
      let msg = "Contactos";
      let toShow =["Posobles_Interesados", "Por_Enviar", "Ya_Se_Envió" ]
      let contInterested="";
      let lowRange, upRange;
      let bitacora=[];
      let bit = [];
      let sent =[];
      let toSend = [];
      let tosend =[];
      let res = [];

   // checked
         function checkedTCont(checkedContacts, $property ){

         }

   // Edit
         function editProperty() {
            console.log("propEditing");
            $systStatus = "propEditing"
            console.log("propEditing");
         };

   // Delete Contact
          async function deleteProperty() {
          if(confirm("Deseas eleiminar definitivamente la propiedad?")){
            console.log("Borraste al propiedad")
            // @ts-ignore
            await deleteDoc(doc(db, "properties", $property.id))
            editStatus = false;
            $systStatus = "start"
          }  
        };

   //  WhatshApp
         function sendWA(){    
            console.log($modeAction);       
               // let link = (`https://api.whatsapp.com/send?phone=52${contChecked}&text=${$property.urlProp}`)
               // window.open(link);
               $modeAction = "sendProperties"
               let claveProp = $property.claveEB
               sendProperty(contChecked, claveProp)
            };

   // Guarda en bitácora la propiedad enviada
         function sendProperty(contChecked){
            console.log($property);
            let proSent = $property.claveEB
            $systStatus = "binnAdding"
            let propertyL = dbProperties.filter((item) => item.urlProp === contChecked[0])
            // $property = propertyL[0]
            if($modeAction === "sendMsg"){
               $binnacle = {"date": Date.now(), "comment": contChecked, "to": $contact.telephon, "action": "Mensaje enviado: "}
            } else if ($modeAction === "sendProperties"){
               $binnacle = {"date": Date.now(), "comment": $property.claveEB, "to": $contact.telephon, "action": "Enviada desde propiedad: "}
               console.log($binnacle);
            }else {
               $binnacle = {"date": Date.now(), "comment": $property.claveEB, "to": $contact.telephon, "action": "Propiedad enviada: "}
            }
            // binnSave($systStatus, $binnacle )
            $modeAction = "";
            $systStatus = "contSelect"
         };

   // Check imput
         function toChecked(){
            console.log("propiedad ch", propCheck)
         }






   // Agrupar contactos por enviar, enviado e interesado
         function splitContStat(){
            // console.log($conInterest);
            // $conInterest.forEach((cont) => {
            //    tosend = cont.sendedProperties.indexOf($property.claveEB)

               
            //    // console.log(tosend);
            //    if(tosend >= 0){
            //       sent.push(cont)
            //       $toRender = sent
            //       //   console.log(sent);
            //    } else {
            //       toSend.push(cont);
            //       $toRender = toSend
            //       // console.log(toSend);
            //    }
            //    // console.log(toSend, sent);
            // })
         }







   // Separar contactos agrupados
         function listToRender(){ 
            if(contInterested === "Posobles_Interesados"){
               msg = "Contactos Les Puede Interesar Esta Propiedad"
               $toRender = $conInterest
            } else if(contInterested === "Por_Enviar"){
               toSend=[];
               msg = "No Se Les Ha Enviado Esta Propieadad"
               res = dbBinnacle.filter(item =>
               item.comment === $property.claveEB)
               const contsT = res.map(doc => doc.to)
               toSend = $conInterest.filter(doc => !contsT.includes(doc.telephon))               
               $toRender = toSend
            } else if(contInterested === "Ya_Se_Envió"){
               sent=[];
               msg = "Ya se les envió esta propiedad"
               res = dbBinnacle.filter(item =>
               item.comment === $property.claveEB)
               dbContacts.filter((cont) =>{
                  res.forEach(binn => {
                     if(cont.telephon === binn.to){
                        sent.push(cont)
                     }
                     })
                     $toRender = sent
                  })
            }
         }
      // Buscar Interesados
         function findCustomers() {
            seeCont = true;
            filtPropContInte($property, dbContacts)
         }; 

      // onCancel
         function onCancel() {
            // @ts-ignore
            $property = [];
            $systStatus="start"
         };

      // Busca las propiedades enviadas al contacto
         function sendProperties(){
            // bitacora = dbBinnacle.filter(item => item.to === $contact.telephon)
            // let bitT = bitacora.filter(item => item.action === "Propiedad enviada: ")
            // // bitT.forEach(item => console.log(item.comment))
            // bitT.forEach(item => bit.push(item.comment))
          };
            // sendProperties($contact)




</script>
   <!-- Informacion de la propiedad -->
         <div class="sele__Product">   
            <div class="sele__info">              
               <div class="selectImage">
               <img src={$property.urlImage} alt={$property.nameProperty}>
               </div>            
               <div class="descSelect">
               <h4> {$property.claveEB} {$property.nameProperty}</h4>
               <h5>{$property.selectTP} en Col. {$property.colonia} al {$property.locaProperty} de la ciudad.</h5>
               <h6>Precio: {$property.price}</h6>
               <div>
                  <h6>{$property.beds} Recamaras, {$property.bathroom} Baños y {$property.halfBathroom} Medio Baño</h6>
                  
               </div>
                  <h6>{$property.areaBuilding} m2 de construcción y {$property.areaTotal} m2 de terreno</h6>
                  <!-- <h6>{property.areaTotal} m2 de terreno</h6>               -->
                  <p class="descSelec">{$property.description}</p>
               </div>
   <!-- Botones -->
               <div class="folowLink">
                  <!-- svelte-ignore security-anchor-rel-noreferrer -->
                  <a href={$property.urlProp} target='_blank'>Seguir Link en Otra Ventana</a>        
               </div>
               <div class="optionsSend" >

   <!-- Buscar interesados -->
                  <button class="btnCommon btnWhatsApp" on:click={sendWA}>Enviar por WhatsApp</button>
                  <button class="btnCommon" on:click={findCustomers}>Buscar Interesados</button>
               </div>
   <!-- resto -->
               <div class="backAnt">
                  <button class="btnCommon btnCancel" on:click={onCancel}>Regresar</button>
               </div>
   <!-- Edit Delete Icons -->
                  <div class="icon__Content">
                     <!-- svelte-ignore a11y-click-events-have-key-events -->
                     <img on:click = {editProperty} src={edit} alt="delete">
                     <!-- svelte-ignore a11y-click-events-have-key-events -->
                     <img on:click = {deleteProperty} src={trash} alt="delete">
                     <!-- <i on:click = {deleteProperty} class="material-icons delete" >delete_forever</i> -->
                  </div>
               </div>
         </div> 


   <!-- Tarjeta de clientes interesados -->
         <div class="container cont__interest">
            {#if seeCont}
               <div class="sect__Title">
                  <h1>A {$toRender.length} {msg}</h1>
                  {#each toShow as list}
                     <label>
                        <input type=radio bind:group={contInterested} value={list} on:change={listToRender}>
                        {list}
                     </label>
                  {/each}
               </div>
               {#each $toRender as $contact}
                  <div class="conInt">
                     <input type="checkbox" value={$contact.telephon} bind:group={contChecked}/>
                     <h3>{$contact.name} {$contact.lastname}</h3>
                     {#if $contact.locaProperty === false}
                        <h4>{$contact.locaProperty}</h4>
                     {:else}
                        <h4>Sin Zona Establecida</h4>
                     {/if}
                     {#if $contact.budget > 0}
                        <div>{$contact.budget}</div>
                     {:else if $contact.rangeProp != ""}
                        <div>{$contact.rangeProp}</div>
                     {:else}
                        <h4>Sin Rango Establecido</h4>
                     {/if}
                     {#if $contact.tagsProperty === false}
                        <div>{$contact.tagsProperty}</div>
                     {:else}
                        <h4>Sin Etiquetas</h4>
                     {/if}
                  </div>
               {/each}
            {/if}
         </div>

<style>

    .sele__Product{
      display: flex;
      margin: 0 auto;
       width: 80%;
       /* padding: 15px 15px; */
      }
      
      .sele__info{
         display: column;
         margin: 0 auto;
      }
      
      .selectImage{
         max-width: 95%;
      }
      
      .conInt{
         width: 300px;
         min-height: 110px;
         padding: 5px 10px;
         border: solid 2px;
         border-radius: 5px;
         margin-left: 3px;
         margin-bottom: 3px;
      }

      .cont__interest{ 
         width: 100%;
         margin: 10px;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
         align-items: flex-start;
         justify-content: center; 
      }

      .sect__Title{
         width: 90%;
      }
</style> 