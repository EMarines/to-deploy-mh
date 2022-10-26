<script>
  // importaciones 
    // @ts-ignore
    import { Router, Route, Link } from "svelte-navigator";
    import Home from './Home.svelte'
    // import Contactos from './Contactos.svelte'
    // import Propiedades from './Propiedades.svelte'
    // import Captacion from './Captacion.svelte'
    import Agenda from './Agenda.svelte'   
    import About from './About.svelte'
    import Sinergias from "./Sinergias.svelte";
    // import AltaContacto from './AltaContacto.svelte'
    // import AltaPropiedad from './AltaPropiedad.svelte';
    import login from './Login.svelte'
    // import logoMH from '../assets/images/logoMH.png'
    import Registro from "./Registro.svelte";
    import Login from "./Login.svelte";
    import { isLogged } from '../store/isLogged'
    // import SelectProperty from '../components/SelectProperty.svelte';
   
   let isLoggedUser = false;

   isLogged.subscribe((data) => {
    isLoggedUser = data;
   });

</script>
  <!-- Navbar -->
    <div class= "nav">
      <!-- <input type="checkbox" id="check">      
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label> -->
   
        <Router>
          <div class="navMenu">
            <header>
              <!-- <img src={logoMH} alt="MatchHome" class="logoMH">   -->
              <nav>              
                  <Link to="/">Home</Link>       
                  <Link to="contactos">Contactos</Link>
                  <Link to="propiedades">Propiedades</Link>
                  <Link to="captacion">Captación</Link>            
                  <Link to="agenda">Agenda</Link>
                  <Link to="sinergias">Sinergias</Link>
                  <Link to="about">About</Link>
                  {#if !isLoggedUser}
                    <Link to="registro">Registro</Link>
                    <Link to="login">Login</Link>
                  {/if}


                  <!-- <Link to="selectContact">SelectedContact</Link>       -->
              </nav>
            </header>
          </div>
        
        <main>
  <!-- Router -->
           <Route path="/">
            <Home />
          </Route>
          
          <!-- <Route path="/contactos">
            <Contactos />
          </Route>
          
          <Route path="propiedades">
            <Propiedades />
          </Route>
          
          <Route path="captacion">
            <Captacion />
          </Route> -->
          
          <Route path="agenda">
            <Agenda />
          </Route>

          <Route path = "sinergias">
            <Sinergias />
          </Route>
          
          <Route path = "about">
            <About />
          </Route>

          <!-- <Route path = "altaContacto">
            <AltaContacto />
          </Route> -->
          <Route path = "login">
            <Login />
          </Route>

          <Route path = "registro">
            <Registro />
          </Route>
          
          <!-- <Route path="altaPropiedad">
            <AltaPropiedad />
          </Route> -->
          <!-- <Route path="selectedContact">
            <SelectProperty />
          </Route> -->
          
        </main>

        
      <!-- <a href="https://matchhome.net" target="_blank" class="enlace"> 
        <img src={logoMH} class="logoMH" alt="MatchHome" />
      </a> -->
        
      </Router>
      
      <section>
        
      </section>
    </div>

   
<style> 

  .nav{
    background: #2fcdcd;
    height: auto;
    width: 100%;
    padding: 40px;
  }
  /* .enlace{
    position: absolute;
    padding: 20px 50px;
  } */

  /* .logoMH {
    height: 40px;
  }

  .logoMH:hover {
    filter: drop-shadow(0 0 2em #000000aa);
  }  */

  /* .nav ul{
    float: right;
    margin-right: 20px;
  } */

  /* .nav ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
  } */

  /* .logoNavbar{
    display: flex;
    align-items: center;
  } */

  /* .nav ul li a{
    color: #fff;
    font-size: 18px;
    padding: 7px 13pz;
    border-radius: 3px;
    text-transform: uppercase;
  } */

  /* li:active, li:hover{
    background: #000090;
    transition: .5s;
  } */
  
  /* .checkbtn{
    font-size: 30px;
    color: #fff;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor:pointer;
    display: none;
  } */

  /* #check{
    display: none;
  } */

  /* section{
    background: url(logMh);
    background-size: cover;
    background-position: center center;
    height: calc(100vh -80);
  } */

  /* @media (max-width: 952px){ */
    /* .enlace{
      padding-left: 20px;
    } */

    /* .nav ul li a{
      font-size: 16px;
    } */

  /* } */

  /* @media (max-width: 858px){ */
   /* .checkbtn{
     display: block;
   } */

   /* nav{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all .5s;
   } */

   /* .nav ul li{
    display: block;
    margin: 5px 0;
    line-height: 30px;
   } */

   /* .nav ul li a{
    font-size: 20px;
   } */

  /* .hide:hover, li{
    background: none;
    color: red;
   }  */

   /* #check:checked, ~ ul{
    left: 0;
   }  */
/*    
  .nav{
    display: block;
  } */


  /* } */

</style>
