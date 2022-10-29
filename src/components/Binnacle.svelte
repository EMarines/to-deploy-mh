a<script>
	import { dbBinnacle } from './../../firebase.js';
    import { formatDate } from '../assets/funcions/sevralFunctions'

    (function(){
        dbBinnacle.sort((a, b) => {
            if(a.date < b.date){
                return 1;
            } else if (a.date > b.date){
                return -1;
            } else {
                return 0;
            }
        })
    })();

</script>
<main>

    <div class="container">
        <div class="schedule">
            <div class="binnacleHome">
                <h1 class="title">Bitácora</h1>
                {#each dbBinnacle as item, i}
                <div class="int-binnacle">
                    {#if i < 30}
                        <div class="date-binnacle">
                            {formatDate(item.date)}                  
                            {item.comment}
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