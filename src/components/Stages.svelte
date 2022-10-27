<script>


  import { contactStage } from '../assets/parameters'
	// let etapa;
	export let value;
	
</script>

<!-- <section>
  <div>
{#each contactStage as stage}
    <label>
      <input type="radio"  value={stage} bind:group={stage}/> {stage}
    </label>
    
    {/each}
  </div>
</section> -->

<section>
	<div>
		<label>
		<input type="radio"  value="Etapa 1" bind:group={value}/> Etapa 1
	</label>

	<label>
		<input type="radio" value="Etapa 2"  bind:group={value}  /> Etapa 2
	</label>	
</div>

<div>
	<label>
		<input type="radio" value="Etapa 3"  bind:group={value} /> Etapa 3
	</label>

	<label>
		<input type="radio" value="Etapa 4" bind:group={value} /> Etapa 4
	</label>	
</div>
	
<div>
		<label>
		<input type="radio" value="Etapa 5" bind:group={value} /> Etapa 5
	</label>
</div>
</section>


<style>
	section{
			width: 30%;
			border: 2px solid purple;
			border-radius: 10px;
			padding: 8px;
	}
	div{
		font-size: 12px;
		font-weight: bold;
		color: purple;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-around;
	}
</style>

