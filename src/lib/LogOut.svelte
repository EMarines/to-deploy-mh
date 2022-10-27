<script>
	// // import { isAuth } from './../store/isLogged.js';
   // import { Link, navigate } from "svelte-navigator";
   // import { auth } from "../../firebase";
   // import { signOut, onAuthStateChanged } from "firebase/auth";
   // import Notificacion from "../components/Notifications.svelte";
   // // import { useNavigate } from "svelte-navigator";

   // import { isLogged, credentials } from '../store/isLogged'
   
 
   // async function logout(){
   //    try {
   //       await signOut(auth)
   //       $isLogged = false;
   //       // @ts-ignore
   //       $credentials = {};
   //       navigate("/login")         
   //    } catch (error) {
   //       console.log(error)
   //    }
   // }

   // onAuthStateChanged(auth, authUser =>{
   //    // @ts-ignore
   //    $credentials = authUser;
   //    $isLogged = !!authUser
   // })

   // let messageNotification = "";
   // let showNotification = false;

   // const showMessage = (message) => {
   //   messageNotification = message;
   //   showNotification = true;
 
   //   setTimeout(() => {
   //     showNotification = false;
   //   }, 2800);
   // };
 
 
   // const loginUser = async () => {
   // //   try {
   // //     await signInWithEmailAndPassword(
   // //       auth,
   // //       credentials.email,
   // //       credentials.password
   // //       );
   // //       console.log(auth, credentials.email)
   // //       if(auth){
   // //          $isAuth = true;
   // //       // @ts-ignore
   // //       showMessage("Te logeaste con ")
   // //    }
   // //    navigate("/");
   // //   } catch (error) {
   // //     if (error.message === "Firebase: Error (auth/wrong-password).") {
   // //       showMessage("Contraseña incorrecta")
   // //     }
   // //   }
   // };

 </script>
<!--  
 <div>
   <Notificacion message={messageNotification} show={showNotification}/>
   <br /><br /><br />
   <div class="form-signin">
     <h1 class="text-center text-login">Salir de la sesión</h1>
     <div class="center">
     </div>
     <br />
     <div class="center">
       <button class="button-signup fondo-color-signup" on:click={logout}>
         Estoy seguro que quiero salir?
       </button>
     </div>
     <br />
     <p class="text-center">
       O deseas continuar <Link to="/"> Cancelar</Link>
     </p>
   </div>
 </div>
  -->
 <style>
   /* .text-login {
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
   } */
 </style>

