<script>
   import { formatDate, formatHour, formatDay } from '../assets/funcions/sevralFunctions';
   import { dbTodos } from '../../firebase'; 
  //  import { db } from '../assets/db';

  const toRender = dbTodos;
 
</script>

<!-- AGENDA -->
<div class="show-home">

   <div class="container">
     <div class="schedule">
       <h1 class="title">Agenda</h1> 

       <h3 class="subtitle">Tareas</h3>
          {#each toRender as item}
            <!-- {#if new Date(item.endTask) <= new Date()} -->
              {#if !item.timeTask}
                <ul>
                  <li class:complete={item.isComplete}>               
                    {formatDate(item.endTask)} - -
                    {item.task} - -
                    {#if item.notes}
                      {item.notes} 
                    {/if}          
                  </li>
                </ul>
              {/if}
            <!-- {/if} -->
          {/each}

        <h3 class="subtitle">Citas</h3>
          {#each toRender as item}
            <!-- {#if new Date(item.endTask) <= new Date()} -->
              {#if item.timeTask}
                <ul>
                  <li class:complete={item.isComplete}>
                    <spam type="number">
                      {formatDay (item.endTask)}
                      {formatHour(item.endTask)} - -
                      {formatDate(item.endTask)}
                      {item.task} - -
                      {#if item.notes}
                          {item.notes} 
                      {/if}            
                    </spam>        
                  </li>
                </ul>
              {/if}
            <!-- {/if} -->
          {/each}      
     </div>
   </div>
   </div>

   <style>
    .title{
        color:blue;
    }

    .subtitle{
      color:deepskyblue;
    }
   </style>
