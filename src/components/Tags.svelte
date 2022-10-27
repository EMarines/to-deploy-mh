<script>
   import Tags from './Tags.svelte';
   import { tags } from '../assets/parameters'
  // let etapa;
   export let tag;
  
</script>

<section>
	<div>
		<label>Fracc. Privado
		   <input type="checkbox"  value="Fracc. Privado" bind:group={tag}/>
	   </label>

      <label>Frente a Parque
         <input type="checkbox" value="Frente a Parque"  bind:group={tag}  />
      </label>	
      <label>Una Planta
         <input type="checkbox" value="Una Planta"  bind:group={tag} />
      </label>
</div>
<div>

	<label>Recamara en P.B.
		<input type="checkbox" value="Recamara en PB" bind:group={tag} />
	</label>	
   <label>Patio Amplio
   <input type="checkbox" value="Patio Amplio" bind:group={tag} />
   </label>
   
   <label>Lista para Habitarse
   <input type="checkbox" value="Lista Habitarse" bind:group={tag} />
   </label>
</div>
	
<div>

   <label>Nueva
		<input type="checkbox" value="Nueva" bind:group={tag} />
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

