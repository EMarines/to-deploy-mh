
<script>
   
   // Importaciones
      import { db, dbProperties, dbContacts } from '../../firebase';
      import { Link, useNavigate } from "svelte-navigator";
      import { deleteDoc, doc} from 'firebase/firestore';
      import { property, conInterest } from '../stores/stores'
      import { filtPropContInte } from '../assets/funcions/filContacts'
      import { systStatus } from '../stores/stores';
      import trash from '../assets/images/trash.svg'
      import edit from '../assets/images/edit.svg'

      import ContactCard from './CardProperty.svelte';
      import { claim_space } from 'svelte/internal';
      // import { filtPropContInte } from '../assets/funcions/rangValue'

   // Declaraciones
      const navigate = useNavigate();
      let checkedContacts = [];
      let conInt = [];
      let currentId;
      let seeCont = false;
      let editStatus= false;
      let lowRange, upRange;

   // Funciones
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

      // Buscar Interesados
         function findCustomers() {
            // console.log("La propiedad es: ", $property)
            filtPropContInte($property, dbContacts)
            // $contToRender = conInt;
            // console.log(conInt)
            seeCont = true;
         }; 

      // onCancel
         function onCancel() {
            // @ts-ignore
            $property = [];
            $systStatus="start"
         };

</script>
   <!-- Informacion de la propiedad -->
         <div class="sele__Product">   
            <div class="sele__info">              
               <div class="selectImage">
               <img src={$property.urlImage} alt={$property.nameProperty}>
               </div>            
               <div class="descSelect">
               <h4> {$property.claveEB} {$property.nameProperty}</h4>
               <h5>{$property.selecTP} en Col. {$property.colonia} al {$property.locaProperty} de la ciudad.</h5>
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
                  <button class="btnCommon btnWhatsApp" on:click={() => checkedTCont(checkedContacts, $property)}>Enviar por WhatsApp</button>
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
         {#if seeCont}
         {#each $conInterest as item}
         <div class="conInt">
                  <input type="checkbox">
                  <div>{item.name} {item.lastname}</div>
                  <div>{item.locaProperty}</div>
                  <div>{item.tagsProperty}</div>
                  <div>{item.budget}</div>
                  <div>{item.rangeProp}</div>
               </div>
               {/each}
         {/if}

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
         padding: 5px 10px;
         border: solid 2px;
         border-radius: 5px;
      }
 </style> 