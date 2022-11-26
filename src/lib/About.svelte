<script>
	import { toRender, systStatus } from './../stores/stores.js';
   import { binnVBA } from '../assets/toJason'
   import { binnSave } from '../assets/funcions/binnSaver'
	// import { dbContacts } from './../../firebase.js';
   // import { deleteItems } from 'src/assets/funcions/crud';
   import { db, dbBinnacle, dbContacts, dbProperties } from '../../firebase';

   let listToString = [];
   let binn = {
      to: "",
      action: "",
      comment: "",
      date: 0
   };

// // Busca los elementos que no tienen tipo de propiedad a buscar
      // dbContacts.forEach(element => {
      //    if(!!element.selecTP === false){
      //       console.log(element.name, element.lastname)
      //    }
      // });

// Busca en la bitácora las propiedades enviadas
      // let list = dbBinnacle.filter(propEnv => propEnv.action === "Propiedad enviada:")
      // console.log(list);
      let listPropSent = [];
      let listStr = [];
      let n = 1;  

      $toRender=[];
      
      // function findPropSent(){
      //    $toRender = dbContacts.filter((cont) => 
      //       cont.locaProperty.length > 0)
      //    dbBinnacle.forEach(binn => {
      //       // console.log(list);
      //       list = binn.comment.includes(num)
      //       console.log(list);
      //       if(list >=0){

      //          console.log(binn);
      //       } else {
      //          console.log("no");
      //       }

      //       console.log(list);
      // }

   // Busca en binnacles las propiedades enviadas y las guarda en la nuve
      function findPropSent(){    
         binnVBA.filter(binn => { 
            $systStatus = "binnAdding";
            const binnA = binn.commBinnacle.includes("EB-")
            if(binnA === true){
               listPropSent.push(binn)
               // console.log(n, binn);
               n++
            }
         })
         // $toRender = listPropSent;
      }

   // Cambiar tipos del array de binnacle
      function chanFormat(){
         listStr = [];
         findPropSent();
         listPropSent.forEach(item =>{
            binn={
               to: (item.to).toString(),
               action: "Propiedad enviada: ",
               comment: item.commBinnacle,
               date: new Date(item.date).getTime()
            } 
            
            listStr.push(binn)
            console.log(binn);
            binnSave($systStatus, binn)
         })
         console.log(listStr);
      }

   // // Busca en binnacles donde "to" es numero para convertirlo en string
   //    function findPropSent(){    
   //       dbBinnacle.filter(binn => { 
   //          console.log(binn);
   //          // $systStatus = "binnAdding";
   //          if(typeof(binn.to) == "number"){ 
   //             list.push(binn)
   //             // binnSave($systStatus, binn)
   //             // console.log(n, binn);

   //             n++
   //          }
   //       })
   //       $toRender = list;
   //    }

</script>


<div class="cont">
   <h1>Estas en About</h1>
   <h2>{$toRender.length}</h2>
   <button on:click={chanFormat}>BuscarPropSent</button>
   {#each $toRender as item}
      <!-- {#if !!item.selecTP === false} -->
         <h3>{item.to} {item.commBinnacle}</h3>
      <!-- {/if} -->
   {/each}
</div>
