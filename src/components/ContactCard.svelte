<script>
	// import ContactCard from './ContactCard.svelte';
   import {  formatDate } from '../assets/funcions/sevralFunctions'
   export let name, lastname, createdAt, contactStage, telephon, email, budget, rangeProp
</script>

<div class="container  contact" >

   <div class="contactCard">
      <div class="namePerson">
        <h5>{name} {lastname} </h5>
        <h5>Alta {formatDate(createdAt)}</h5>
      </div >
    
      <div class="nameDate">
        <p>{contactStage}</p>
        <p>tel: {telephon} email: {email}</p>
        <p>Presupuesto {budget}</p>
        <p>Rango {rangeProp}</p>
      </div>

   </div>

</div>  

<style>
   .contact{
      width: 35%;
      min-width: 400px;
   }

   .namePerson{
      display: flex;
      font-size: 1.5rem;
      text-align: center;
      padding: 10px;
      justify-content: space-between;
   }

   .nameDate{
      font-size: 1rem;
      justify-content: space-between ;
   }
</style>
