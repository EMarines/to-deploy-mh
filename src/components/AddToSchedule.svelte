<script>
// @ts-nocheck
   
   // Importaciones
      import { createEventDispatcher } from 'svelte';
      import { fly, fade } from 'svelte/transition';
      import { contact, todo, systStatus } from '../stores/stores';
      import { binnSave } from '../assets/funcions/itemSaver'
      import { now } from 'svelte/internal';

      
   // Declaraciones
         const dispatch = createEventDispatcher();

         let nombre = (`${$contact.name} ${$contact.lastname}`)
         let tarea = [];
         let task = [];
         // let fechaVista= new Date();
         let endTask;
         let endTaskQ = 0;
         // console.log(endTask)

         tarea = {
            task: "",
            endTask: "",
            isComplete: "",
            createdAt: "",
            timeTask: "", 
            notes: "",
            user: ""        
         };
   // *- Funciones
      // Close
            function close() {
               dispatch('closeIt');            
               $systStatus = "contSelect";
               $todo="";
            };
      
      // Agrega la tarea
            const addTodo = async() => {
               console.log("ests en addTodo");
               $systStatus= "todoAdding"
               // endTask=(new Date(endTaskQ).getTime())
               console.log(endTask);
               task = nombre;
               // tarea = {...tarea, endTask}
               $todo = {...tarea, task}
               binnSave($systStatus, $todo)
               console.log($todo)
               // close();
               // $todo = "";
            };
                 
      // Agrega la tarea con el "Enter"
            const keyIsPressed = (event) => {
               if (event.key ==="Enter"){
                  addTodo()
               };
            };

</script>

   <!-- <body> -->

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="background" transition:fade on:click ={close}/>
         <div class="pop-up" transition:fly>         
            <div>
               <input type="text" class="inputTask"  placeholder = "Agrega una Tarea o Cita" bind:value = {nombre} />
            </div>
            <div class="contDate">
               <input type="time"class="inputDate" bind:value = {tarea.timeTask} />
               <input type="date" class="inputDate" bind:value = {tarea.endTask} /> 
            </div>
            <div>
               <textarea name="notes"  cols="40" rows="5" bind:value = {tarea.notes} placeholder ="descripción"></textarea>
            </div>         
            <div>
               <button class="btnShedule" on:click={addTodo}>Guardar</button>
               <button class="btnShedule" on:click={close}>Cancelar</button>
            </div>
         </div>  
      <!-- </body>   -->
      <svelte:window on:keydown={keyIsPressed}/>

<style>


   .background {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      align-items: bottom;
      z-index: 2;
   }

   .pop-up {
        position: fixed;
        top: 100px;
        height: auto;
        width: 350px;
        color: white;
        padding: 15px;
        background-color: #37474f;
        border: solid 5px;
        /* flex-wrap: wrap; */
        border-radius: 8px;
        /* align-items: center; */
        z-index: 5;
    }

    
	.inputTask {
      font-size: 15px;
		width: 200px;
      height: 50px;
      margin-bottom: 10px;
      border-radius: 8px;
	}

    .inputDate {
        font-size: 15px;
        padding: 25px;
        width: 150px;
        height: 50px;
        margin-bottom: 10px;
        border-radius: 8px;
    }

    .btnShedule{
      width: 100px;
      height: 30px;
      border-radius: 8px;
      font-size: 20px;
      /* color: rgb(208, 220, 208); */
    }



</style>