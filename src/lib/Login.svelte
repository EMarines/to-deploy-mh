<script>
   import { Link } from 'svelte-navigator';
   
   let credentials = {
      email: "",
      password: ""
   }

   const changeUser = (e) =>{
      credentials = {
         ...credentials,
         [e.target.name]: e.target.value,
      }
      console.log(credentials)
   }

   // function handleSubmit(){
   //    console.log(email, password)
   // }

</script>


<div  class="container">
   <div class="title-secction">

      <h1>Estas en Login</h1>
   </div>
   <!-- <form class='register form' on:submit|preventDefault={handleSubmit}>   -->
      <h3>Login</h3>  
      <label class="form_label">Email
          <input required type="email" name='email' on:input={(e) => changeUser(e)}>  
      </label>
      <label class="form_label">Password
          <input required type="password" name='password'on:input={(e) => changeUser(e)} >
      </label>
      <button>
          Registrarme
      </button>
  <!-- </form> -->

</div>


<style>

   .title-secction{
      width: 90%;
      height: 60px;
   }
</style>