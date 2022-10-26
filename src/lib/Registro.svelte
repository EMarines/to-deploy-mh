<script>
	import { useNavigate } from 'svelte-navigator';
   import { Link } from 'svelte-navigator';
   import { auth } from '../../firebase';
   import { createUserWithEmailAndPassword } from 'firebase/auth'

   const navigate = useNavigate();

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
   };

   const loginUser = async()=>{
      try {
         await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
         navigate("/")
      } catch (error) {
         console.log(error)
      }
   }


</script>


<div  class="container">
   <div class="title-secction">

      <h1>Estas en Registro</h1>
   </div>
   <!-- <form class='register form' on:submit|preventDefault={handleSubmit}>   -->
      <h3>Registro</h3>  
      <label class="form_label">Email
          <input required type="email" name='email' on:input={(e) => changeUser(e)}>  
      </label>
      <label class="form_label">Password
          <input required type="password" name='password'on:input={(e) => changeUser(e)} >
      </label>
      <button on:click={loginUser}>
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