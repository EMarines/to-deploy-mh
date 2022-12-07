
<script>
// @ts-nocheck

   // Importaciones
      import { db, dbContacts, dbProperties, dbBinnacle } from '../../firebase';
      import { collection, onSnapshot } from 'firebase/firestore'
      import { onDestroy } from 'svelte';
      import { Link, useNavigate } from "svelte-navigator";
      import { deleteDoc, doc, DocumentSnapshot} from 'firebase/firestore';
      import { property, conInterest } from '../stores/stores'
      import { filtPropContInte } from '../assets/funcions/filContacts'
      import { systStatus, contact, binnacle, modeAction } from '../stores/stores';
      import { diaTarde } from '../assets/funcions/sevralFunctions'
      import { binnSave } from '../assets/funcions/binnSaver'
      import trash from '../assets/images/trash.svg'
      import edit from '../assets/images/edit.svg';
      import { construct_svelte_component_dev, debug } from 'svelte/internal';
      // import { $systStatus, binnacle, modeAction} from '../stores/stores'
      // import ContactCard from './CardProperty.svelte';
      // import { claim_space } from 'svelte/internal';
      // import { filtPropContInte } from '../assets/funcions/rangValue'

   // Declaraciones
      const navigate = useNavigate();
      $: toRender = [];
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
      let msgHora;
      // $: lista = toRender
      // console.log("lista", lista);

   // Renderizar
         const unsubs = onSnapshot(
            collection(db, "binnacles"),
            (querySnapshot) => {
               bitacora = querySnapshot.docs.map(doc => {
                  return{...doc.data(), id: doc.id}
               })
               ordenar(bitacora)
               console.log(bitacora);
            },
               (err) =>{
                  console.log(err);
            }
            );
         
         onDestroy(unsubs)

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
            $contact = contChecked[0]
           let saludoHora = diaTarde()
            let msg = (` *____*        ${$contact.name}. ${saludoHora}  Te envío esta casa que creo te va a interesar. ¡Saludos!`)       
            let link = (`https://api.whatsapp.com/send?phone=52${$contact.telephon}&text=${$property.urlProp}    ${msg}`)
            window.open(link, "ventana1","width=350,height=350,scrollbars=NO");   
            $modeAction = "sendProperties"
            let claveProp = $property.claveEB
            sendProperty($contact)
            };

   // Guarda en bitácora la propiedad enviada
         function sendProperty($contact){
            // console.log($property, $contact);
            let proSent = $property.claveEB
            $systStatus = "binnAdding"
            let propertyL = dbProperties.filter((item) => item.urlProp === contChecked[0])
            if($modeAction === "sendMsg"){
               $binnacle = {"date": Date.now(), "comment": contChecked, "to": $contact.telephon, "action": "Mensaje enviado: "}
            } else if ($modeAction === "sendProperties"){
               $binnacle = {"date": Date.now(), "comment": $property.claveEB, "to": $contact.telephon, "action": "Propiedad enviada: "}
               // console.log($binnacle);
            }else {
               $binnacle = {"date": Date.now(), "comment": $property.claveEB, "to": $contact.telephon, "action": "Propiedad enviada: "}
            }
            binnSave($systStatus, $binnacle);
            toRender = [];
            // listToRender(bitacora);

            // $modeAction = "";
            $systStatus = "propSelect"
            console.log(toRender);
         };

      // Separar contactos agrupados
          function listToRender(){ 
            console.log("entraste de nuevo en la funcion listToRender", bitacora.length);
            if(contInterested === "Posobles_Interesados"){
               msg = "Contactos Les Puede Interesar Esta Propiedad"
               toRender = $conInterest
            } else if(contInterested === "Por_Enviar"){
               toSend=[];
               msg = "No Se Les Ha Enviado Esta Propieadad"
               res =  bitacora.filter(item =>
               item.comment === $property.claveEB)
               const contsT = res.map(doc => doc.to)
               toSend = $conInterest.filter(doc => !contsT.includes(doc.telephon))               
               toRender = toSend
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
                     toRender = sent
                  })
            }            
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



   // Ordena dbProperties por fecha de publicación
         function ordenar(toRender) {
               toRender.sort((a, b) => {
                  if(new Date(a.createdAt) < new Date(b.createdAt)){
                     return 1;
                  } else if (new Date(a.createdAt) > new Date(b.createdAt)){
                     return -1;
                  } else {
                     return 0;
                  }
               })
            };        

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
                  <button class="btn__WhatsApp" on:click={sendWA($contact)}>Enviar por WhatsApp</button>
                  <button class="btn__saveNote" on:click={findCustomers}>Buscar Interesados</button>
               </div>
      <!-- resto -->
               <div class="backAnt">
                  <button class="btn__cancel" on:click={onCancel}>Regresar</button>
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
         <!-- Input Radio para seleccionar contatos a mostar -->
         <div class="container cont__interest">
            {#if seeCont}
               <div class="sect__Title">
                  <h1>A {toRender.length} {msg}</h1>
                  {#each toShow as list}
                     <label>
                        <input type=radio bind:group={contInterested} value={list} on:change={listToRender}>
                        {list}
                     </label>
                  {/each}
               </div>
      <!-- Renderiza a los conactos seleccionados -->
               {#each toRender as $contact}
                  <div class="conInt">
                     <input type="checkbox" value={$contact} bind:group={contChecked}/>
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