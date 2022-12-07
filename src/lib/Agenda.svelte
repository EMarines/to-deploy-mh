<script>
// @ts-nocheck

   // Importaciones
      import { collection, addDoc, deleteDoc, doc, updateDoc, getDoc, onSnapshot } from 'firebase/firestore'
      import { db, dbTodos} from '../../firebase';
      import schedule from '../assets/images/schedule.png';
      import { fly, fade } from 'svelte/transition';
      import { todo, systStatus } from '../stores/stores'
      import { formatDate } from '../assets/funcions/sevralFunctions'
      import { useNavigate } from "svelte-navigator";
      import { sort } from '../assets/funcions/sort'
      import edit from '../assets/images/edit.svg'
      import calendar_check from '../assets/images/calendar_check.svg'
      import { onDestroy } from 'svelte';


   // Declaraciones
      const navigate = useNavigate(); 

      let error = "";
      let editStatus = false;
      let modeCrud = "addItem"
      $systStatus = "start";
      let toRender=[];

      let tarea = {
         task: "",
         isComplete: "",
         createdAt: "",
         endTask: "",
         timeTask: "", 
         notes: "",
         user: "" ,
         id:""       
      }
  
   // Renderiza $toRender y lo ordena por fecha
         const unsubs = onSnapshot(
            collection(db, "todos"),
            (querySnapshot) => {
               toRender = querySnapshot.docs.map(doc => {
                  return{...doc.data(), id: doc.id}
               })
                  sort(toRender);
                  console.log(toRender);
            },
               (err) =>{
                  console.log(err);
            }
            );
         
         onDestroy(unsubs)

   // Manejo de Agregar o Editar
         async function handTodos() {
            console.log($todo, modeCrud, $systStatus);
            $todo = tarea;
            let endTask = new Date($todo.endTask).getTime()
            $todo = {...$todo, endTask}
            if(modeCrud === "deleItem"){
               let confDelete = confirm("Quieres borrarlo definitivmente?");
               if(confDelete === true){
                  await deleteDoc(doc(db, "todos", $todo.id));
               };
            } else if(modeCrud === "editItem") {
               await updateDoc(doc(db, "todos", $todo.id), $todo)
            } else {
               await addDoc(collection(db, "todos"), $todo);
            };
            editStatus = false;
            $todo = {}; 
            tarea = {};
            // navigate("/");
         };

   // Edita la tarea
         async function editTodo(item) {             
            tarea = item             
            console.log(item);
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
            if(tarea.task.length > 0){             
               $systStatus = "typing"
               // console.log($systStatus);
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


</script>

   <!-- <button on:click={getData}>click</button> -->
      <div class="container">
         <h1>Agenda</h1>
         <img src={schedule} alt="schedule" class="imgTitle">

         <div class="container">      
            <div class="background" transition:fade on:keydown ={close}/>
               <div class="pop-up" transition:fly>         
                  <div>
                     <input type="text" class="inputTask" cols="56" rows="1"  placeholder = "Agrega una Tarea o Cita" bind:value = {tarea.task} on:input={typeTask}/>
                  </div>
                  <div class="contDate">
                     <input type="time"class="inputDate" bind:value = {tarea.timeTask} />
                     <input type="date" class="inputDate" bind:value = {tarea.endTask} /> 
                  </div>
                  <div>
                     <textarea name="notes" id="" cols="56" rows="5" bind:value = {tarea.notes} placeholder ="descripción"></textarea>
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
         {#if $systStatus === "start"}
            <h3>Tareas</h3>
               <!-- <h5>Num de tareas: {ren.length}</h5> -->
               <ol>
                  {#each toRender as item}
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
               {#each toRender as item}            
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