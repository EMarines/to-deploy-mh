a<script>
	import { dbBinnacle, db } from './../../firebase.js';
    import { formatDate } from '../assets/funcions/sevralFunctions';
    import { collection, onSnapshot } from 'firebase/firestore';
    import { onDestroy } from 'svelte';

    let toRenBinn=[];

    function ordenar(toRenBinn){
        toRenBinn.sort((a, b) => {
            if(new Date(a.date) < new Date(b.date)){
                return 1;
            } else if (new Date(a.date) > new Date(b.date)){
                return -1;
            } else {
                return 0;
            }
        })
    };

      // Renderizar
      const unsubs = onSnapshot(
            collection(db, "binnacles"),
            (querySnapshot) => {
                toRenBinn = querySnapshot.docs.map(doc => {
                  return{...doc.data(), id: doc.id}
               })
               ordenar(toRenBinn)
            //    console.log(toRenBinn)
            },
               (err) =>{
                  console.log(err);
            }
            );
         
         onDestroy(unsubs)

</script>
<main>

    <div class="container">
        <div class="schedule">
            <div class="binnacleHome">
                <h1 class="title">Bitácora</h1>
                {#each toRenBinn as item, i}
                <div class="int-binnacle">
                    {#if i < 20}
                        <div class="date-binnacle">
                            {formatDate(item.date)} 
                            {item.action}                 
                            {item.comment}
                            a: 
                            {item.to}
                        </div>
                    {/if}                          
                </div>
                {/each}
                
            </div>
        </div>
    </div>
</main>

<style>
    .title{
        color:red;
    }
</style>