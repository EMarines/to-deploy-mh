<script>
  // Importaciones
      import { property, systStatus } from './../stores/stores.js';
      import { contact } from '../stores/stores'
      import Ubication from '../components/Ubication.svelte'
      import Tags from '../components/Tags.svelte'
      import { typeProperties, typeSaller, oneTofive, oneToFour, ranges, contactMode, typeOperation } from '../assets/parameters'
      import { formatDate} from '../assets/funcions/sevralFunctions'

      let editDate = false;


      function mostInputDate(){
         editDate = true;
      }
</script>

    

  <!-- Muestro o oculta la fecha para mostrar o editar -->
         <!-- <div class=""> -->
          <div>
            {#if editDate}
              <input class=" dataInput" type="date" bind:value={$property.createdAt}  />                
            {:else}
              {#if $systStatus === "propEditing"}
                <h3 class=" dataInput" on:dblclick={mostInputDate} >{formatDate($property.createdAt)}</h3>
              {/if} 
            {/if}
          </div> 

  <!-- Tipo de propiedad buscada -->  
      <select class="selTP" id="selTP" name="selTP" bind:value={$property.selecTP}>
        <option disabled selected value="">Tipo de Propiedad</option>
          {#each typeProperties as selecTP}
            <option type="checkbox" value={selecTP}>{selecTP}</option>
          {/each}
      </select>

  <!-- Propieatrio -->  
     <label>Titulo
       <input type="text">
     </label> 

  <!-- Colonia -->  
       <label>Colonia
        <input type="text" bind:value={$property.colonia}>
      </label>
      
  <!-- Nombre de la Propiedd -->  
      <label>Nombre de la Propiead
        <input type="text" bind:value={$property.nameProperty}>
      </label>

  <!-- Propieatrio -->  
      <label>Clave EB
        <input type="text" bind:value={$property.claveEB}>
      </label>

  <!-- Propieatrio -->  
      <label>Clave MH
        <input type="text" bind:value={$property.claveMH}>
      </label>
     
  <!-- Comentarios del contacto -->
      <div class="col">
        <textarea  placeholder="Comentarios" cols="65" rows="5" bind:value={$property.description} class="form-control"/>
        <!-- <textarea on:keypress={seleTypeAction} class="texArea" cols="65" rows="5" bind:value = {commInpuyBinnacle} placeholder ="Ingresa un comentario"/>  -->
      </div>

  <!-- Tipo de operación -->
      <select bind:value={$property.typeOperation}>
        <option disabled selected value="" >Tipo de Operación</option>
          {#each typeOperation as operation}
            <option type="checkbox" value={operation} >{operation} </option>
          {/each}
      </select>

  <!-- Características buscadas -->
          <select bind:value={$property.beds}>
            <option disabled selected value="" ># Recámaras</option>
            {#each oneTofive as beds}
              <option type="checkbox" value={beds} >{beds} Recámaras</option>
            {/each}
          </select>

          <select bind:value={$property.bathroom}>
            <option disabled selected value=""># Baños</option>
            {#each oneToFour as bathroom}
              <option type="checkbox" value={bathroom}>{bathroom} baños</option>
            {/each}
          </select>

          <select bind:value={$property.halfBathroom}>
            <option disabled selected value=""># Medios Baños</option>
            {#each oneToFour as numberHalfBath}
              <option type="checkbox" value={numberHalfBath}>{numberHalfBath} Medios baños</option>
            {/each}
          </select>

          <select bind:value={$property.park}>
            <option disabled selected value=""># Estacionamientos</option>
            {#each oneToFour as park}
              <option type="checkbox" value={park}>{park} Estacionamientos</option>
            {/each}
          </select>

          <label>Area de Construcción
            <input type="number" bind:value={$property.areaBuilding}>
          </label>

          <label>Area de Terreno
            <input type="number" bind:value={$property.areaTotal}>
          </label>

  <!-- precio -->
          <label>Precio
            <input type="number" bind:value={$property.price}>
          </label>

  <!-- Link de la imagen --> 
      <label>Link Imgen
        <input type="text" bind:value={$property.urlImage}>
      </label> 

      <label>Link de la Propiedad
        <input type="text" bind:value={$property.urlProp}>
      </label> 
          

          <!-- <select bind:value={$property.rangeProp}>
            <option disabled selected value="">Rango Buscado</option>
            {#each ranges as range}
              <option type="checkbox" value={range}>{range}</option>
            {/each}
          </select> -->

          <!-- <select bind:value={$property.contMode}>
            <option disabled selected value="">Modo de Contacto</option>
            {#each contactMode as mode}
              <option type="checkbox" value={mode}>{mode}</option>
            {/each}
          </select> -->

      <!-- Propieatrio -->
          <label>Propietario
            <input type="text">
          </label>

      <!-- Tipo de propietario -->
          <select name="typeSaller" bind:value={$property.typeSaller}>
            <option disabled selected value="">Tipo de Encargado</option>
            {#each typeSaller as saller}
                  <option type="checkbox" value={saller}>{saller}</option>
            {/each}
          </select>

    <!-- Tags -->
        <Ubication bind:ubication={$property.locaProperty}/>
        <Tags bind:tag = {$property.tagsProperty} />

