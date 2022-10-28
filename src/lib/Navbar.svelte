<script>
  // importaciones 
    // @ts-ignore
    import { Router, Route, Link, navigate } from "svelte-navigator";
    import logoMH  from '../assets/images/logoMH.png'
    import menu  from '../assets/images/menu.svg'
    import Home from './Home.svelte'
    import Contactos from './Contactos.svelte'
    import Propiedades from './Propiedades.svelte'
    import Captacion from './Captacion.svelte'
    import Agenda from './Agenda.svelte'   
    import About from './About.svelte'
    import Sinergias from "./Sinergias.svelte";
    import AltaContacto from './AltaContacto.svelte'
    import AltaPropiedad from './AltaPropiedad.svelte';
    import login from './Login.svelte'
    import Registro from "./Register.svelte";
    import Login from "./Login.svelte";
    // import { isAuth } from "../store/isLogged";
    // import { useAuthUser } from '../hooks/useAuthUser'
    import LogOut from "./LogOut.svelte";
    import { signOut, onAuthStateChanged } from "firebase/auth";
    import { auth } from "../../firebase";
    import { isLogged } from '../store/isLogged'

    // import SelectProperty from '../components/SelectProperty.svelte';
   
    // useAuthUser();


    // console.log(credentials)
    console.log("logged? ", $isLogged)
    let isLoggedUser = false;

   isLogged.subscribe((data) => {
    isLoggedUser = data;
   });

   async function logout(){
    console.log($isLogged)
   }

  //     try {
  //       console.log(auth)
  //        await signOut(auth)
  //        $isLogged = false;
  //       console.log(auth)

  //        // @ts-ignore
  //        credentials = {};
  //       //  navigate("/login")                 
  //       console.log($isLogged)

  //     } catch (error) {
  //        console.log($isLogged)
  //     }
  //  }
   

  //  onAuthStateChanged(auth, authUser =>{
  //     // @ts-ignore
  //     credentials = authUser;
  //     $isLogged = !!authUser
  //  })

  //  console.log(isLoggedUser)
</script>
  <!-- Navbar -->
      <!-- <input type="checkbox" id="check">      
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label> -->
   
        <nav class="nav">
        <Router>


            <div class="nav__container">

              <img src={logoMH} alt="MatchHome" class="nav__logo"> 

              <label class="nav__label" for="menu">
                <img src={menu} class="nav__img" alt="menu">
              </label>
              <input type="checkbox" id="menu" class="nav__input">

              <div class="nav__menu">
                <!-- {#if isLogged} -->
                <!-- <div id="nav__item"> -->
                <Link to="/">Home</Link>  
                <Link to="contactos">Contactos</Link>
                <Link to="propiedades">Propiedades</Link>
                <!-- <Link to="captacion">Captación</Link>             -->
                <Link to="agenda">Agenda</Link>
                <!-- <Link to="sinergias">Sinergias</Link> -->
                <Link to="/about" on:click={logout}>LogOut</Link>
                
                <!-- {:else} -->
                <Link to="about">About</Link>
                <Link to="register">Registro</Link>
                <Link to="login">Login</Link>
              <!-- </div>      -->
              </div>
                <!-- {/if} -->

                  <!-- <Link to="selectContact">SelectedContact</Link>       -->
             
              </div>

           <Route path="/">
            <Home />
          </Route>
          
          <Route path="/contactos">
            <Contactos />
          </Route>
          
          <Route path="propiedades">
            <Propiedades />
          </Route>
          
          <Route path="captacion">
            <Captacion />
          </Route>
          
          <Route path="agenda">
            <Agenda />
          </Route>

          <Route path = "sinergias">
            <Sinergias />
          </Route>
          
          <Route path = "about">
            <About />
          </Route>

          <Route path = "logout">
            <LogOut />
          </Route>

          <!-- <Route path = "altaContacto">
            <AltaContacto />
          </Route> -->
          <Route path = "login">
            <Login />
          </Route>

          <Route path = "register">
            <Registro />
          </Route>
          
          <!-- <Route path="altaPropiedad">
            <AltaPropiedad />
          </Route> -->
          <!-- <Route path="selectedContact">
            <SelectProperty />
          </Route> -->
          

      </Router>
    </nav>

      
        

   
<style> 


.nav{
  width: 100%;
  background: #2ab712;
  height: 80px;
  color: #fff;
}

.nav__img{
  width: 40px;
  color: #fff;
}

.nav__container{
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

}

.nav__logo{
  width: 80px; 
}

  .nav__label, .nav__input{
    display: none;
  }

  /* a{
    color: #fff;
    text-decoration: none;
  } */

  .nav__input:checked + .nav__menu{
    clip-path: circle(100% at center);
  } 

  .nav__menu{
    display: grid;
    grid-auto-flow: column;
    gap: 3em;
    flex-wrap: wrap;
  }

  @media (max-width: 700px){
    .nav__label{
      display: block;
      cursor: pointer;
    }
    .nav__menu{
      position: fixed;
      top: 80px;
      bottom: 0;
      background: #f08080;
      width: 100%;
      left: 0;
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      z-index: 10;
      clip-path: circle(0 at center);
      transition: clip-path 2s easy-in-out;
    }
  }
  
</style>
