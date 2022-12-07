<script>
  // Importaciones
    import { contact, systStatus } from '../stores/stores';
    import ContData from '../components/ContData.svelte';
    import { db } from '../../firebase';
    import { collection, addDoc, doc, updateDoc} from 'firebase/firestore';
    // import { binnacle } from './../stores/stores.js';
    // import { binnSave } from '../assets/funcions/binnSaver'
    // import { now, subscribe } from 'svelte/internal';
    // import PropData from '../components/PropData.svelte';

  // Decalraciones
    let editStatus = false;
    let createdAt;
    // let commBinnacle;
    // let noteBinnacle;
    
    
  // Funciones
    // Edición o Alta de contacto
        async function handSubmit($contact) { 
          // console.log($systStatus);
          if($systStatus != "contEditing"){
            createdAt = Date.now()
            $contact = {
              ...$contact, createdAt
            }     
               const contToAdd = collection(db, "contacts")
               await addDoc(contToAdd, $contact);
               $systStatus = "binnAdding"
               infoToBinnacle($systStatus, $contact)
            } else {
               await updateDoc(doc(db, "contacts", $contact.id), $contact)
               infoToBinnacle($systStatus, $contact)
               editStatus = false;
            }
            $contact = ""; 
            $systStatus = "contSelect"
        };

    // Añadir Información a Bitácora para Alta de Contacto
          async function infoToBinnacle ($systStatus, $contact) {  
            try {
              if($systStatus === "binnAdding"){
                  let commBinnacle = (`${$contact.name} ${$contact.lastname}`)
                  let binnInfo = {"date": Date.now(), "comment": commBinnacle, "action": "Se agregó a: ", "to": $contact.telephon }
                  const binnacleToAdd = collection(db, "binnacles")
                  await addDoc(binnacleToAdd, binnInfo);
              } else {
                  let commBinnacle = (`Se le editó a: ${$contact.name} ${$contact.lastname}`)
                  let binnInfo = {"date": Date.now(), "comment": commBinnacle, "action": "Se editó a: ", "to": $contact.telephon }
                  console.log(binnInfo);
                  const binnacleToAdd = collection(db, "binnacles")
                  await addDoc(binnacleToAdd, binnInfo);
              }
            } catch (error) {
              console.log("error", error)
            }        
          };

    // Guardar bitácora
            const saveBinnacle = async (noteBinnacle) => {
              // await db.collection("binnacles") .doc().set({ ...noteBinnacle});
              // noteBinnacle=[];
              // // console.log("entró a guardar en bitácora", noteBinnacle)
            };

    // On Cancel
          function onCancel() {
            editStatus = true
            location.href = "/"
          };

</script>

  <!-- ContData  Datos Personales del Contacto -->
            <div class="altaContactos">
              <!-- <form class="" on:submit|preventDefault={handSubmit}>       -->
                <ContData />
                <!-- <PropData /> -->
                  <div class="contSavCan">        
                    <button class="btn__save" on:click={()=>handSubmit($contact)}>{#if !editStatus}Guardar{:else}Editar{/if}</button>         
                    <button class="btn__cancel" on:click={onCancel}>Cancel</button>
                  </div>
                </div>              
              <!-- </form> -->

<style>
  .contSavCan{
    width: 90%;
    margin-left: 5%;
    /* justify-content: center; */
  }

</style>