<script>
// @ts-nocheck
	// Importaciones
      import user from '../assets/images/add-user.png';
      import ContactCard from '../components/ContactCard.svelte';
      import Search from '../components/Search.svelte';
      import SelectedContact from '../components/SelectedContact.svelte';
      import { dbContacts } from '../../firebase';
      import { conInterest, contact, proInterest, systStatus } from '../stores/stores';
      import AltaContacto from './AltaContacto.svelte';
      import { expoInOut } from 'svelte/easing';
      import { scale } from 'svelte/transition';



   // Declaraciónes
      let searchTerm;
      $systStatus = "start";
      let item;
      // let toRender = [];
      // $conInterest = dbContacts;

   //Pagination
      let currentPage = 1; // Update this to simulate page change.
      let postsPerPage = 15;
      let toRender = [];
      $: totalPosts = toRender.length;
      $: totalPages = Math.ceil(totalPosts / postsPerPage);
      $: postRangeHigh = currentPage * postsPerPage;
      $: postRangeLow = postRangeHigh - postsPerPage;

      const setCurrentPage = newPage => {
         currentPage = newPage;
      };

   // Funciones 
      // Agregar contacto
         const handAddContact = () => {
            $systStatus = "contAdding"
         };

      // Contacto Seleccionado
         const selectContact = (item) => {
            searchTerm = "";
            $contact= item
            $systStatus = "contSelect";
         };

      // Search contacto
         function searCont() {
            return toRender= dbContacts.filter((contacto) => {
               let contInfo = (contacto.name + " " + contacto.lastname).toLowerCase();
            return contInfo.includes(searchTerm.toLowerCase());
            });
         };

      // Ordena dbContacts por fecha
         (() => {
            return toRender = dbContacts.sort((a, b) => {
               if(new Date(a.createdA) < new Date(b.createdAt)){
                  return 1;
               }
               if(new Date(a.createdAt) > new Date(b.createdAt)){
                  return -1;
               }
               return 0
            });
         })();

</script>

   <!-- Encabezado de Contactos e imagen -->   
      <main class="container">
         <div>
            <h1>Contactos</h1>
            <img src={user} alt="contactos">
         </div>

         {#if  $systStatus === "start"}
            <h2>{dbContacts.length} Contactos a Mostrar</h2>
            <button class="altaContacto" on:click={handAddContact}>Alta de Contacto</button>

            <Search bind:searchTerm on:input={searCont} /> 
      
   <!-- Rederiza los contactos  -->
            <div class="mosPag cont__card">   
               <main id="bookshelf">    
                  {#each toRender as item, i}
                     {#if i >= postRangeLow && i < postRangeHigh}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="selecContact" on:click = {()=> selectContact(item)} transition:scale={{duration: 500, easing: expoInOut}}>
                           <ContactCard {...item} />
                        </div>
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
       

   <!-- Contacto Seleccionado -->
         {#if $systStatus === "contSelect"} 
            <div>
               <SelectedContact {$contact}/>
            </div>
         {/if}

         {#if $systStatus  === "contEditing" || $systStatus === "contAdding"}
            <div>
              <div class="container"> 
                <AltaContacto {...$contact} />
              </div>
            </div>
        {/if}

      </main>  

<style>
   img{
      max-width: 150px;
   }

   

   .altaContacto{
      min-width: 200px;
      max-width: 300px;
		height: 35px;
		font-size: 22px;
		color: rgb(2, 10, 57);
		border-radius: 5px;
      background-color: rgb(195, 232, 239);
      margin-bottom: 5px;
   }

   .cont__card{
      min-width: 350px;
      max-width: 600px;
   }
 

</style>