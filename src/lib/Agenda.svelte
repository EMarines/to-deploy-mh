<script>
// @ts-nocheck

   // Importaciones
      import { collection, addDoc, deleteDoc,doc, updateDoc } from 'firebase/firestore'
      import schedule from '../assets/images/schedule.png';
      import { fly, fade } from 'svelte/transition';
      import { todo, toRender } from '../stores/stores'
      import { db, dbTodos } from '../../firebase'
      import { formatDate } from '../assets/funcions/sevralFunctions'
      import { useNavigate } from "svelte-navigator";
      import { sort } from '../assets/funcions/sort'

   // Declaraciones
      const navigate = useNavigate();

      let error = "";
      let editStatus = false;
      let showShedule = false;

      $toRender = dbTodos

      // Manejo de Agregar o Editar
         async function handTodos() {
            if(!editStatus){
               const todoToAdd = collection(db, "todos")
               await addDoc(todoToAdd, $todo);
            } else {
               await updateDoc(doc(db, "todos", $todo.id), $todo)
               editStatus = false;
            };
            editStatus = false;
            $todo = {}; 
            $toRender=dbTodos
            navigate("/");
         };

      // Elimina la tarea
         async function deleteTodo(id) {            
            editStatus = true;
            let confDelete = confirm("Quieres borrarlo definitivmente?");
            navigate("/");
            if(confDelete == true){
               await deleteDoc(doc(db, "todos", id))           
               navigate("/")
            };
            // editStatus = false;
         };

      // Edita la tarea
         async function editTodo(item) {
            $todo = item
            editStatus = true;
            // showShedule = true;
         };

      // Marcar completada la tarea
         function markTodoAsComplete() {
         };

      // Close
         function close() {
            $todo=[]; 
            navigate("/contactos")
         };

      // Ordena por fecha (endTask) sort
         sort($toRender);
    
</script>

   <!-- <button on:click={getData}>click</button> -->
      <div class="container">
         <h1>Agenda</h1>
         <img src={schedule} alt="schedule" class="imgTitle">

         <div class="container">      
            <div class="background" transition:fade on:keydown ={close}/>
               <div class="pop-up" transition:fly>         
                  <div>
                     <input type="text" class="inputTask" cols="56" rows="1"  placeholder = "Agrega una Tarea o Cita" bind:value = {$todo.task} />
                  </div>
                  <div class="contDate">
                     <input type="time"class="inputDate" bind:value = {$todo.timeTask} />
                     <input type="date" class="inputDate" bind:value = {$todo.endTask} /> 
                  </div>
                  <div>
                     <textarea name="notes" id="" cols="56" rows="5" bind:value = {$todo.notes} placeholder ="descripción"></textarea>
                  </div>            
                  <div>
                     <!-- <button id="btn-task-save" on:click={handTodos}>Guardar</button> -->
                     <button on:click={handTodos} >{#if !editStatus}Guardar{:else} Editar{/if}</button>
                     <button on:click={close}>Cancelar</button>
                  </div>
               </div>   
            </div>

   <!-- Agrega listado de tareas -->
      <div class= "container">     
         {#if !editStatus}
            <h3>Tareas</h3>
               <ol>
                  {#each $toRender as item}
                     {#if !item.timeTask}
                        <div>
                           <li class="schedule" class:complete={item.isComplete}>
                              <span>
                                 <button on:click={ () => markTodoAsComplete(item.id) }>✔</button>
                                 <button on:click={ () => deleteTodo(item.id) }>✖</button>
                                 <button on:click={ () => editTodo(item)}>✔✖</button>                  
                              </span>
                              <spam>
                                 {formatDate(item.endTask)} -*-
                                 {item.task} -*-
                                 {#if item.notes}
                                    {item.notes} 
                                 {/if}          
                              </spam>        
                           </li>
                        </div>
                     {/if}
                  {:else}
                        <p>No Hay Tareas Pendientes</p>
                  {/each}
               
                     <p class="error">{error}</p>
            </ol>
   <!-- Agrega citas -->
         <h3>Agenda</h3>
            <ol>
               {#each $toRender as item}            
                  {#if item.timeTask}
                     <div  on:dblclick={() => editTodo}>
                           <li class="schedule" class:complete={item.isComplete}>
                              <span>
                                 <button on:click={ () => markTodoAsComplete(item.id) }>✔</button>
                                 <button on:click={ () => deleteTodo(item.id) }>✖</button>
                                 <button on:click={ () => editTodo(item) } >✔✖</button>
                              </span>
                              <spam>
                                 {item.timeTask} -*-
                                 {formatDate(item.endTask)} -*-
                                 {item.task} -*-
                                 {#if item.notes}
                                    {item.notes} 
                                 {/if}            
                              </spam>        
                           </li>
                     </div>
                  {/if}
               {:else}
                     <p>No Hay Tareas Pendientes</p>
               {/each}
               <p class="error">{error}</p>
            </ol>
         {/if}
      </div>
<!-- Muestra el fomato de schedule -->
         <!-- {#if showShedule}
            <div>
               <AddToSchedule {$todo} />
            </div>
         {/if} -->
   </div>
<style>
      .schedule {
         /* width: 550px; */
         color: #651fff;
         font-size: 1.4rem;
         text-align: left;
      }

      .imgTitle{
         max-width: 148px;
      }


      

</style>