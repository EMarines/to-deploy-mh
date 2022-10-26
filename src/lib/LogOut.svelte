<script>
	import { isAuth } from './../store/isLogged.js';
   import { Link } from "svelte-navigator";
   import { auth } from "../../firebase";
   import { signInWithEmailAndPassword } from "firebase/auth";
   import { useNavigate } from "svelte-navigator";
   import Notificacion from "../components/Notifications.svelte";
   
 
   const navigate = useNavigate();

   let credentials = {
     email: "",
     password: "",
   };

   let messageNotification = "";
   let showNotification = false;

   const showMessage = (message) => {
     messageNotification = message;
     showNotification = true;
 
     setTimeout(() => {
       showNotification = false;
     }, 2800);
   };
 
   const changeUser = (e) => {
     credentials = {
       ...credentials,
       [e.target.name]: e.target.value,
     };
   };
 
   const loginUser = async () => {
     try {
       await signInWithEmailAndPassword(
         auth,
         credentials.email,
         credentials.password
         );
         console.log(auth, credentials.email)
         if(auth){
            $isAuth = true;
         // @ts-ignore
         showMessage("Te logeaste con ")
      }
      navigate("/");
     } catch (error) {
       if (error.message === "Firebase: Error (auth/wrong-password).") {
         showMessage("Contraseña incorrecta")
       }
     }
   };

 </script>
 
 <div>
   <Notificacion message={messageNotification} show={showNotification}/>
   <br /><br /><br />
   <div class="form-signin">
     <h1 class="text-center text-login">Salir de la sesión</h1>
     <div class="center">
       <!-- <input
         name="email"
         type="text"
         class="input-form"
         placeholder="Correo"
         on:input={(e) => changeUser(e)}
       />
     </div>
     <div class="center">
       <input
         name="password"
         type="password"
         class="input-form"
         placeholder="Contraseña"
         on:input={(e) => changeUser(e)}
       /> -->
     </div>
     <br />
     <div class="center">
       <button class="button-signup fondo-color-signup" on:click={loginUser}>
         Estoy seguro que quiero salir?
       </button>
     </div>
     <!-- <p class="text-center">O también</p> -->
     <br />
     <p class="text-center">
       O deseas continuar <Link to="/"> Cancelar</Link>
     </p>
   </div>
 </div>
 
 <style>
   .text-login {
     font-size: 26px;
   }
   .center {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   .form-signin {
     width: 100%;
     max-width: 520px;
     height: 240px;
     padding: 15px;
     margin: auto;
     background-color: white;
     box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
   }
 
   .text-center {
     text-align: center;
   }
 
   /* INPUTS */
   /* .input-form {
     background-color: transparent;
     border: 1.5px solid rgb(0 0 0 / 10%);
     border-radius: 5px;
     padding: 10px;
     outline: none;
     width: 90%;
     font-size: 16px;
     -webkit-box-shadow: none;
     box-shadow: none;
     -webkit-box-sizing: content-box;
     box-sizing: content-box;
     margin: 5px;
   } */
 
   /* BUTTON SIGNUP */
   .button-signup {
     display: inline-block;
     font-weight: 400;
     color: #ffffff;
     height: 45px;
     width: 90%;
     text-align: center;
     border: 1px solid transparent;
     padding: 0.375rem 0.75rem;
     font-size: 1rem;
     line-height: 1.5;
     cursor: pointer;
     transition: 0.2s;
   }
   .fondo-color-signup {
     background: #833ac7;
   }
 </style>

