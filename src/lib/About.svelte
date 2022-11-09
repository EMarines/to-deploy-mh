<script>
	// import { dbContacts } from './../../firebase.js';
   // import { deleteItems } from 'src/assets/funcions/crud';
import { db, dbContacts, dbProperties } from '../../firebase'
console.log(dbContacts);

dbContacts.forEach(element => {
   if(!!element.selecTP === false){
      console.log(element.name, element.lastname)
   }
});

</script>


<div class="cont">
   <h1>Estas en About</h1>
   
   {#each dbProperties as item}
      {#if !!item.selectTP === false}
         <h3>{item.id}</h3>
      {/if}
   {/each}
</div>