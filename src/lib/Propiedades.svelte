<script>
	// import { toRender } from './../stores/stores.js';
   // Importaciones
      import house from '../assets/images/house.png';
      import Search from '../components/Search.svelte';
      import CardProperty from '../components/CardProperty.svelte';
      import { property, systStatus } from '../stores/stores'
      import { collection, onSnapshot } from 'firebase/firestore'
      import { onDestroy } from 'svelte';
      import { searchProperty } from '../assets/funcions/search'
      import { scale } from 'svelte/transition';
      import { expoInOut } from 'svelte/easing';
      import SelectProperty from '../components/SelectProperty.svelte';
      import { dbProperties , db } from '../../firebase';
      import AltaPropiedad from './AltaPropiedad.svelte';

   // Decalaraciónes
      let searchTerm;
      let toRender = [];
      let editStatus = false;
      let contCheck = [];
      let item;

      $systStatus = "start";

   //Pagination
      let currentPage = 1; // Update this to simulate page change.
      let postsPerPage = 20;
      // $: toRender = dbProperties;
      $: totalPosts = toRender.length;
      $: totalPages = Math.ceil(totalPosts / postsPerPage);
      $: postRangeHigh = currentPage * postsPerPage;
      $: postRangeLow = postRangeHigh - postsPerPage;

      const setCurrentPage = newPage => {
         currentPage = newPage;
      }

   // Renderizar
         const unsubs = onSnapshot(
            collection(db, "properties"),
            (querySnapshot) => {
               toRender = querySnapshot.docs.map(doc => {
                  return{...doc.data(), id: doc.id}
               })
               ordenar(toRender)
            },
               (err) =>{
                  console.log(err);
            }
            );
         
         onDestroy(unsubs)

 
   // Propiedad Seleccionada
            function selectProduct(item) {
               console.log(item)
               $property = item
               $systStatus = "propSelect"
            };

   // Manejo Alta o edición
            function handAddPrperty(){
               $systStatus = "propAdding"
            }
      
   // Search Property
            function searProp() {
               return toRender= dbProperties.filter((property) => {
               let contInfo = (property.nameProperty + " " + property.colonia).toLowerCase();
               return contInfo.includes(searchTerm.toLowerCase());
               })
            };
            
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

  

</script>
      <!--Encabezado de Propiedades e imagen -->
         <div class="container">
            <div>
               <h1>Propiedades</h1>
               <img src={house} alt="propiedad" class="imgTitle">
            </div>

            {#if $systStatus === "start"}  
               <h2>{toRender.length} Propiedades a Mostrar</h2>
               <button on:click={handAddPrperty}>Alta de Propiedad</button>

               <Search bind:searchTerm on:input={searProp} />
            <!-- {/if} -->
      <!-- Propiedades -->
            <!-- {#if $systStatus === "start"} -->
            <div class="mosPag">   

               <main id="bookshelf">
                  {#each toRender as item, i}
                     {#if i >= postRangeLow && i < postRangeHigh}

                     <!-- svelte-ignore a11y-click-events-have-key-events -->
                     <section class = "property" on:click={() => selectProduct(item)} transition:scale={{duration: 500, easing: expoInOut}}>                  
                        <!-- <input type="checkbox" value={item.urlProp} class="form-check" bind:group={contCheck}/>	 -->
                        <CardProperty {...item} />
                     </section>                     
                     {/if}
                  {/each}
               </main>

      <!-- Paginación del en Dom -->
               <div class = "container pagination">
                  <div class="pagi__Item">
                     <ul class="pagi__options">
                        
                        {#if currentPage > 1}
                           <li><a href="/blog" on:click|preventDefault={() => setCurrentPage(1)}>first</a></li>
                           <li><a href="/blog/{currentPage - 1}" on:click|preventDefault={() => setCurrentPage(currentPage - 1)}>previous</a></li>
                        {/if}
                        <!-- </div> -->
                        
                        <!-- <div class="pagiItem"> -->
                           {#each [3,2,1] as i}
                              {#if currentPage - i > 0}
                                 <li><a href="/blog/{currentPage - i}" on:click|preventDefault={() => setCurrentPage(currentPage - i)}>{currentPage - i}</a></li>
                              {/if}
                           {/each}
                           <!-- </div> -->

                        <li><span>{currentPage}</span></li>
                  
                     <!-- <div class="pagiItem"> -->
                           {#each Array(3) as _, i}
                              {#if currentPage + (i+1) <= totalPages}
                                 <li><a href="/blog/{currentPage + (i+1)}" on:click|preventDefault={() => setCurrentPage(currentPage + (i+1))}>{currentPage + (i+1)}</a></li>
                              {/if}
                           {/each}
                     <!-- </div> -->
         
         
                  <!-- <div class="pagiItem">  -->
                           {#if currentPage < totalPages}
                              <li><a href="/blog/{currentPage + 1}" on:click|preventDefault={() => setCurrentPage(currentPage + 1)}>next</a></li>
                              <li><a href="/blog/{totalPages}" on:click|preventDefault={() => setCurrentPage(totalPages)}>last</li>
                           {/if}
                     </ul>      
                  </div>
               </div>

            </div>

            {/if}
      <!-- Propiedad seleccionada -->
            {#if $systStatus === "propSelect"}
               <div>
                  <SelectProperty {...$property} /> 
               </div>
            {/if}   
      <!-- Edición de propiedad -->           
                  {#if $systStatus  === "propEditing"}               
                     <div class="container"> 
                        <AltaPropiedad  {...$property}/>
                     </div>
                  {/if} 

      <!-- Alta de propiedad -->             
                  {#if $systStatus === "propAdding"}
                     <div class="container">
                        <AltaPropiedad  />
                     </div>   
                  {/if}
               
               
         </div>
         <!-- </div> -->
<style>

   main#bookshelf {
      width: 100%;
      margin: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center; 
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

   .imgTitle{
      max-width: 148px;
   }

</style>