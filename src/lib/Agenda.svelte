<script>
// @ts-nocheck

   // Importaciones
      import { collection, addDoc, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
      import { db, onGetTask, dbTodos } from '../../firebase';
      import schedule from '../assets/images/schedule.png';
      import { fly, fade } from 'svelte/transition';
      import { todo, toRender } from '../stores/stores'
      import { formatDate } from '../assets/funcions/sevralFunctions'
      import { useNavigate } from "svelte-navigator";
      import { sort } from '../assets/funcions/sort'
      import edit from '../assets/images/edit.svg'
      import calendar_check from '../assets/images/calendar_check.svg'


   // Declaraciones
      const navigate = useNavigate();
      
      let error = "";
      let editStatus = false;
      let modeCrud = "addItem"
      $toRender = dbTodos;

   // Renderiza el listado al editar
         (async() => {
            onGetTask((querySnapshot) => {
                  $toRender
               })
         })();


   // Manejo de Agregar o Editar
         async function handTodos() {
            if(modeCrud === "deleItem"){
               let confDelete = confirm("Quieres borrarlo definitivmente?");
                  if(confDelete == true){
                     await deleteDoc(doc(db, "todos", $todo.id));
            };
            } else if(modeCrud === "editItem") {
               await updateDoc(doc(db, "todos", $todo.id), $todo)
            } else {
               await addDoc(collection(db, "todos"), $todo);
            }
            editStatus = false;
            $todo = {}; 
            // navigate("/");
         };

   // Edita la tarea
         async function editTodo(item) { 
            $todo=item
            modeCrud = "editItem"
            editStatus = true;
         };

   // Elimina la tarea
         async function deleteTodo() { 
            editStatus = true;
            modeCrud="deleItem"
            handTodos()
         };

   // Ocultar agenda al empezar a escribir
      // Al escribir en task
         function typeTask(){
            if($todo.task.length > 0){
               editStatus=true;
            }
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
                     <input type="text" class="inputTask" cols="56" rows="1"  placeholder = "Agrega una Tarea o Cita" bind:value = {$todo.task} on:input={typeTask}/>
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
                     <!-- <img src="" alt=""> -->
                     <button on:click={close}>Cancelar</button>
                     {#if editStatus}
                        <button on:click={deleteTodo}>Borrar</button>
                     {/if}
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
                                 <!-- <button on:click={ () => markTodoAsComplete(item.id) }>✔</button> -->
                                 <!-- <button on:click={ () => deleteTodo(item) }>✖</button> -->
                                 <!-- <button on:click={ () => editTodo(item)}>✔✖</button>  -->
                                 <!-- svelte-ignore a11y-click-events-have-key-events -->
                                 <img on:click={()=>editTodo(item)}  src={edit} alt="edit" class="iconIMH">
                                 <!-- svelte-ignore a11y-click-events-have-key-events -->
                                 <img on:click={()=>markTodoAsComplete(item)}  src={calendar_check} alt="complete" class="iconIMH">
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
                                 <!-- svelte-ignore a11y-click-events-have-key-events -->
                                 <img on:click={()=>editTodo(item)}  src={edit} alt="edit" class="iconIMH">
                                 <!-- <button on:click={ () => editTodo(item) } >✔✖</button> -->
                                 <!-- svelte-ignore a11y-click-events-have-key-events -->
                                 <img on:click={()=>markTodoAsComplete(item)}  src={calendar_check} alt="complete" class="iconIMH">
                                 <!-- <button on:click={ () => markTodoAsComplete(item.id) }>✔</button> -->
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

      .iconIMH{
         width: 30px;
         height: 30px;
      }
      
   

</style>