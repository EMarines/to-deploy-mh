<script>
// @ts-nocheck

    // Importaciones
      import { db, dbContacts, dbProperties, dbBinnacle } from '../../firebase';
      import { collection, deleteDoc, doc, addDoc} from 'firebase/firestore';
      import Search from './Search.svelte';
      import AddToSchedule from './AddToSchedule.svelte';
      import CardProperty from './CardProperty.svelte';
      import { contact, systStatus, proInterest, property, binnacle, modeAction } from '../stores/stores.js';
      import { filtContPropInte } from '../assets/funcions/filProperties'
      import { formatDate} from '../assets/funcions/sevralFunctions';
      import { scale } from 'svelte/transition';
      import { expoInOut } from 'svelte/easing';
      import { binnSave } from '../assets/funcions/binnSaver';
      import trash from '../assets/images/trash.svg'
      import edit from '../assets/images/edit.svg';
      import { useNavigate } from "svelte-navigator";
      // import { sendProperties } from '../assets/funcions/sentProperties'
      // import AltaContacto from '../lib/AltaContacto.svelte';
      // import { searchProperty } from '../assets/funcions/search'
 
    // Declaraciones
      const navigate = useNavigate();
      let mostImageProp = false;
      let imgToShow;
      let mostPoperties = false;
      let isActivated = false;
      let searchTerm;
      let editStatus= false;
      let message;
      let filteredProperties = [];
      let commInpuyBinnacle;
      let mostButtons = false;
      let contCheck = [];
      let showProp = false;
      let mosrBusq = false;
      let proInt = [];
      let listToRender = [];
      let showAltCont = false;
      let bitacora = [];
      let bit = [];
      let date = [];
      let comment = [];

    // Busca la imagen de la propiedad a renderizar
        function findURLImage(itemP) {
          mostImageProp = true;
          imgToShow = dbProperties.filter((e) => e.claveEB === (itemP))
          // console.log(imgToShow[0].urlImage);
          // if(imgToShow[0].urlImage === undefined){
          //   console.log("foto fam");
          //   return  "https://assets.easybroker.com/property_images/1031233/15455598/medium_EB-CY1233.png"
          // } else {
            console.log("imagen");
            try {              
              return imgToShow[0].urlImage;
            } catch (error) {
              return  "https://assets.easybroker.com/property_images/1031233/15455598/medium_EB-CY1233.png" 
            }
          // }
        };

    // Abre el link de la página web
      function visitPageProp(link) {
        window.open(link)
      };

    // Mostrar Schedule
      function addSchedule(){
        isActivated = true;
      }
    // Muestra search Properties
        function mostSearch () {
          mosrBusq = true;
        };

    // Input filter ""searchContact""
        const searProp = () => {
          showProp = true;
              return $proInterest = dbProperties.filter((propety) => {
              let contInfo = (propety.nameProperty + " " + propety.colonia + " " + propety.claveEB).toLowerCase();
              return contInfo.includes(searchTerm.toLowerCase());
          });  
        };


    // Muestra las propiedades que le podrían intesar
        function fitProp($contact) {
          filtContPropInte($contact)
          showProp = true;
        };

    // Cancel Button ""start""
      const onCancel = () => {
          editStatus = false;
          filteredProperties = [];
          $contact=[];
          $systStatus = "start";
      };

    // Edit Contact
        function editContact() {
          $systStatus = "contEditing"
        };

    // Delete Contact
        async function deleteContact() {
          if(confirm("Deseas eleiminar definitivamente al contacto?")){
            await deleteDoc(doc(db, "contacts", $contact.id))
            warnDeleteContact($contact)
            navigate("/");
          }  
        };

    // Agrega a Bitácora que se eliminó al contacto
        async function warnDeleteContact($contact){
          let commBinnacle = (`Se le eliminóa: ${$contact.name} ${$contact.lastname} del ${$contact.telephon}`)
                  let binnInfo = {"date": Date.now(), "comment": commBinnacle}
                  console.log($systStatus, binnInfo);

                  const binnacleToAdd = collection(db, "binnacles")
                  await addDoc(binnacleToAdd, binnInfo);
        }
    // Cerrar Shedule                       
        function close(){
          isActivated = false;
        }
        
    // Funciones del WA
        function selectProduct(){
          console.log(contCheck)
        };

        function sendWA(){
          if(!!commInpuyBinnacle){
            contCheck = commInpuyBinnacle
            $modeAction = "sendMsg"
          }
          let link = (`https://api.whatsapp.com/send?phone=52${$contact.telephon}&text=${contCheck}`)
          window.open(link, "ventana1","width=350,height=350,scrollbars=NO" );
          sendProperty(contCheck)
        };
    // Muestra botones WhatsApp y Guardar Info    
        function seleTypeAction (){
            mostButtons = true;
            mostPoperties = false;
          }
          
    // Guarda en bitácora la nota
        function saveNote(){
          $systStatus = "binnAdding"
          $binnacle = {"date": Date.now(), "comment": commInpuyBinnacle, "to": $contact.telephon, "action": "Nota agregada: "}
          binnSave($systStatus, $binnacle )
          $systStatus === "contSelect"
        };

    // Guarda en bitácora la propiedad enviada
        function sendProperty(contCheck){
          $systStatus = "binnAdding"
          let propertyL = dbProperties.filter((item) => item.urlProp === contCheck[0])
          $property = propertyL[0]
          if($modeAction === "sendMsg"){
            $binnacle = {"date": Date.now(), "comment": contCheck, "to": $contact.telephon, "action": "Mensaje enviado: "}
          } else {
            $binnacle = {"date": Date.now(), "comment": $property.claveEB, "to": $contact.telephon, "action": "Propiedad enviada: "}
          }
          binnSave($systStatus, $binnacle )
          $modeAction = "";
          $systStatus = "contSelect"
        };

    // Busca la bitácora las propiedades enviadas
      // (() =>{
      //   bitacora = dbBinnacle.filter(item => item.to === $contact.telephon)
      //   let bitT = bitacora.filter(item => item.action === "Propiedad enviada: ")
      //   // bitT.forEach(item => console.log(item.comment))
      //   bitT.forEach(item => bit.push(item.comment))
      // })();

          function sendProperties($contact){
            bitacora = dbBinnacle.filter(item => item.to === $contact.telephon)
            let bitT = bitacora.filter(item => item.action === "Propiedad enviada: ")
            // bitT.forEach(item => console.log(item.comment))
            bitT.forEach(item => bit.push(item.comment))
            console.log(bit);
          };
      sendProperties($contact)
      // console.log(bit);
        
</script>

    <!-- Datos personales del contacto -->
      <main>
        {#if $systStatus === "contSelect"}
          <div class="container">

            <div>
              <h4>Contacto</h4>                  
              <h2>{$contact.name} {$contact.lastname}</h2>
              <p>Fecha Alta: {formatDate($contact.createdAt)}</p> 
              <p>Busca  {$contact.selecTP}, de {$contact.numBeds} recámaras,  {$contact.numBaths} baños y {$contact.numParks} estacionamientos </p>
              <p>Presupuesto tope: <strong>{$contact.budget}</strong> : Tipo de propiedad buscada: <strong>{$contact.selecTP}</strong></p>
              <p>Teléfono: <strong>{$contact.telephon}</strong> ---- Email: <strong>{$contact.email}</strong> </p>   
              <p>Preferencias: {($contact.tagsProperty).join(',  ')}</p>
              <p> Ubicaciones: {($contact.locaProperty).join(',  ')}</p>

              <div class="propMost" >
    <!-- Muestra las propiedes enviadas -->
              <p> Propiedades enviadas:</p>
                <div class="mostImage">
                  {#each bit as itemP}           
                      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                      <div class="prop__sent">
                        <p>{itemP}</p> 
                        <img class="imgPropContSelect" height = "100" src={findURLImage(itemP)} alt={itemP}> 
                      </div>


                  {/each}
                </div>
              </div>
            </div>

          <div>
            <!-- {#if mostImageProp}        
              <h3>{imgToShow[0].nameProperty}</h3>
              <img class="imgPropContSelect" height = "100" src={imgToShow[0].urlImage} alt={imgToShow[0].claveEB}> 
            {/if}            -->
          </div>

            <p>{$contact.contactStage}</p>
            <p>{$contact.comContact}</p>
    <!-- Botones -->
          <div class="btn__actions">
            <button class="btn__common" on:click = {() => addSchedule($contact)}>Programar Evento</button>
              {#if isActivated}
                <AddToSchedule {...$contact} on:closeIt = {close} />
              {/if}
              <button class="btn__common" on:click = { () => fitProp($contact)}>Ver Propiedades de Interes</button>
              <button class="btn__common" on:click = {mostSearch}> Buscar Propiedad</button>
              {#if mosrBusq}
                <Search bind:searchTerm on:input={searProp} />
              {/if}
          </div>
            
          <div>
            <button class="btn__cancel" on:click={onCancel}>Cancelar</button>
          </div>

          <div>
              <div>
                  <textarea on:keypress={seleTypeAction} class="texArea" cols="65" rows="5" bind:value = {commInpuyBinnacle} placeholder ="Ingresa un comentario"/> 
    <!-- Enviar WA o guardar nota para bitácora -->
                  <div>
                    <!-- {#if commInpuyBinnacle || checkedProperty.length >= 1 } -->
                      <button  class="btn__WhatsApp" on:click={sendWA}>Enviar WhatsApp</button>
                      <button class="btn__saveNote" on:click={()=>saveNote($systStatus, commInpuyBinnacle)}>Guardar Info</button>
                    <!-- {/if} -->
                </div>
              </div>

 

    <!-- Edit Delete Icons -->
                <div class="icon__Content">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <img on:click = {editContact} src={edit} alt="delete">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <img on:click = {deleteContact} src={trash} alt="delete">
                  <!-- <i on:click = {deleteProperty} class="material-icons delete" >delete_forever</i> -->
              </div>
            </div>

    <!-- Muesttra la bitácora -->
            <div>
              {#each bitacora as item}
                <h4>{formatDate(item.date)} {item.action} {item.comment}</h4>
              {/each}
            </div>
          </div> 

    <!-- Propiedades de interés -->
              {#if showProp} 

                <main id="bookshelf">
                  <h3>Propiedades encontradas: {$proInterest.length}</h3>
                                   
                  {#each $proInterest as $property}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <section class = "property" on:click={selectProduct} transition:scale={{duration: 500, easing: expoInOut}}>                  
                      <input type="checkbox" value={$property.urlProp} class="form-check" bind:group={contCheck}/>	
                      <CardProperty {...$property} />
                    </section>
                  {/each}
                  {#if $proInterest.length === 0}
                      <h3>"No hay Propiedades para este contacto"</h3>
                  {/if}
                </main>
              {/if}
        {/if}
      </main>
<style>

  h3{
    color: blue;
  }
  .mostImage{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 90%;
    height: 50px;
    justify-content: space-evenly;
  }

  .property { 
      width: 280px;
      min-height: 354px;
      border: 4px solid #BA5626; 
      border-radius: 3px;
      box-shadow: 1px 1px 0 black;
      margin: 5px;
      background-color: #e4ddcf;
   }

   main#bookshelf {
      width: 100%;
      margin: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center; 
   }

   .prop__sent{
    width: 250px;    
    height: 130px;
    margin-left: 5px;
   }

   .btn__actions{
    margin-top: 100px;
   }



</style>