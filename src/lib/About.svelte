<script>
	import { toRender } from './../stores/stores.js';
	// import { dbContacts } from './../../firebase.js';
   // import { deleteItems } from 'src/assets/funcions/crud';
import { db, dbBinnacle, dbContacts, dbProperties } from '../../firebase';
// console.log(dbContacts);


// Busca los elementos que no tienen tipo de propiedad a buscar
      // dbContacts.forEach(element => {
      //    if(!!element.selecTP === false){
      //       console.log(element.name, element.lastname)
      //    }
      // });

// Busca en la bitácora las propiedades enviadas
      // let list = dbBinnacle.filter(propEnv => propEnv.action === "Propiedad enviada:")
      // console.log(list);
      let list;
      let num = "EB-"
      let toRenderP=[];

      
      
      function findPropSent(){
         toRenderP = dbBinnacle.filter((binn) => {
                 let contInfo = binn.comment
               contInfo.includes(num);
               console.log(toRenderP);
              })
         // dbBinnacle.forEach(binn => {
         //    // console.log(list);
         //    list = binn.comment.includes(num)
         //    console.log(list);
            // if(list >=0){

            //    console.log(binn);
            // } else {
            //    console.log("no");
            // }

            // console.log(list);
         
      }
      // dbBinnacle.forEach(binn => { 
      //    binn.comment.indexOf("EB-")}
      // if(List >= 0){
      //    list.push(item)
      // }
      // )

</script>


<div class="cont">
   <h1>Estas en About</h1>
   
   {#each dbContacts as item}
      {#if !!item.selecTP === false}
         <h3>{item.id}</h3>
      {/if}
   {/each}
</div>

<button on:click={findPropSent}>BuscarPropSent</button>