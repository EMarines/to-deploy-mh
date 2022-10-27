<script>
	export let searchTerm;
</script>

<div id="search-input-cont">
	<input class="searchInput"
		type="text" 
		id="search-field" 
		placeholder="Enter Search Term" 
		autocomplete="off"
		bind:value={searchTerm}
		on:input />
</div> 

<style>	
	.searchInput{
		width: 350px;
		height: 35px;
		font-size: 22px;
		color: rgb(84, 84, 90);
		border-radius: 5px;

	}
</style>
