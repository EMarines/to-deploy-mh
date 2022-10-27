<script>
// @ts-nocheck

import { db, dbBinnacle } from "../firebase";
import { deleteItems } from "../assets/funcions/crud";

   let toErase = [];
   let toFind = "";
   let n =0
   // console.log(dbBinnacle)

   function find() {
      console.log(toFind)
      return toErase = dbBinnacle.filter((binnacle) => {
         let contInfo = (binnacle.comment ).toLowerCase();
         return contInfo.includes(toFind.toLowerCase());
      });      
   }; 

   console.log(toFind, toErase)


   function toEraseSel(){
      toErase.forEach(item =>{
         deleteItems(db, item.id)
      })
   }

</script>

<input type="text" placeholder="palabra a buscar" bind:value = {toFind}>

<button on:click={find(toFind)}>Buscar</button>

{#each toErase as item}
   <p>{item.comment}</p>
{/each}

<button on:click={toEraseSel(toErase)}>Borrar</button>