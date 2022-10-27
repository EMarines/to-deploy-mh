<script>
	// import { properties } from './../assets/parameters.js';
	import { systStatus } from './../stores/stores.js';
   import { property } from '../stores/stores'
   import { collection, addDoc, deleteDoc, getDoc, getDocs, doc, updateDoc} from 'firebase/firestore';
   import { formatDate } from '../assets/funcions/sevralFunctions'
   import { db } from '../../firebase'
   import ContData from '../components/ContData.svelte'
   import PropData from '../components/PropData.svelte';
   import { Link, useNavigate } from "svelte-navigator";


    let editStatus = false;
    let createdAt = 0;
    const navigate = useNavigate();


// Funciones
   // Edicion o Alta de Propiedad
      async function handleSubmit() { 
         console.log("Estas en add property", $systStatus, $property)
         if($systStatus === "propEditing"){
            // @ts-ignore
            console.log("estas dentro de edit property", $property.id)
            // @ts-ignore
            await updateDoc(doc(db, "properties", $property.id), $property)
            editStatus = false;
         } else {
             createdAt = Date.now()
             $property = {
               // @ts-ignore
               ...$property, createdAt
             }     
            console.log($property)
               const contToAdd = collection(db, "properties")
               await addDoc(contToAdd, $property);
            }
            $systStatus = "start"
        };

         async function addProperty($property) {
            console.log($property)

            createdAt = Date.now();
            try {          
               $property = {
                  ...$property, createdAt
               };
               console.log($property)
              const response =  collection(db, "properties")
              addDoc(response, $property)                                          
            } catch (error) {
              console.log("error", error)
            }          
            console.log($property)
            // navigate("/");
         };

         function updateProperty() {
            $systStatus = "propEditing"
         }

         const onCancel = () => {
            editStatus = false;
            navigate("./")
         }

</script>

      <!-- ContData  Datos Personales del Contacto -->
         <form class="propiedad" on:submit|preventDefault={handleSubmit}>           
            <div class="altaContactos">

      <!-- PropData Datos de la Propiedad  -->
               <div>
                  <img src={$property.urlImage} alt={$property.nameProperty}>
                  <PropData />
               </div>

      <!--  Botones   -->
               <div class="contSavCan">        
                  <button class="btn-save">{#if $systStatus === "propAdding"}Guardar{:else}Editar{/if}</button>
                  <button class="btn-cancel" on:click={onCancel}>Cancel</button>
               </div>
                     
            </div>
         </form>

  <style>

   img{
      width: 250px;
   }

   .contSavCan{
    width: 90%;
    margin-left: 5%;
  }

  </style>