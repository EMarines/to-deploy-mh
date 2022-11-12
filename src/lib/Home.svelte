<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Schedule from '../components/Schedule.svelte'
  import Binnacle from '../components/Binnacle.svelte'
  import user from '../assets/images/add-user.png';
  import home from '../assets/images/house.png';
  import schedule from '../assets/images/schedule.png';
  import team from '../assets/images/team.png';
  import { isAuth } from '../store/isLogged'
  // import Contactos from './Contactos.svelte';
  // import Propiedades from './Propiedades.svelte';
	// import { isLogged } from './../store/isLogged.js';
	// import FindToErase from './../components/FindToErase.svelte';
  // import { db } from '../assets/db.js'
  import Registro from "./Register.svelte";
  import Agenda from './Agenda.svelte';
  import Sinergias from './Sinergias.svelte';
  import Login from "./Register.svelte";
  // import { dbContacts, dbProperties, dbTodos } from '../../firebase'

</script>

  <body>
  
  <!-- Router Menú -->
  
    <div class="wrapper-grid">
      <Router>

        <Link to= "/contactos" title = "contactos">
          <div class="container" >
            <div class="optionCard">
              <!-- <p>{dbContacts.length} Contactos</p> -->
              <img src={user} alt='Buzon' class="profile-img">
              <h1 class="name">Contactos</h1>
            </div>
          </div>  
        </Link>

        <Link to= "/propiedades" title = "propiedades">
          <div class="container" >
            <div class="optionCard">
              <!-- <p>{dbProperties.length} Propiedades</p> -->
              <img src={home} alt='propiedad' class="profile-img">
              <h1 class="name">Propiedades</h1>
            </div>
          </div>  
        </Link>

        <Link to= "/agenda" title = "agenda" class="s">
          <div class="container" >
            <div class="optionCard">
              <!-- <p><strong>{dbTodos.length} Pendientes</strong></p> -->
              <img src={schedule} alt='agenda' class="profile-img">
              <h1 class="name">Agenda</h1>
            </div>
          </div>  
        </Link>

        <Link to= "/sinergias" title = "sinergias">
          <div class="container" >
            <div class="optionCard">
              <!-- <p> Sinergias</p> -->
              <img src= {team} alt='sinergias' class="profile-img">
              <h1 class="name">Sinergias</h1>
            </div>
          </div>  
        </Link>
      <!-- <FindToErase /> -->
      </Router>

      <!-- <Route path="/contactos">
        <Contactos />
      </Route>

      <Route path="/propiedades">
        <Propiedades />
      </Route> -->

      <!-- <Route path="/agenda">
        <Agenda />
      </Route> -->

      <!-- <Route path="/propiedades">
        <Propiedades />
      </Route> -->
<!-- 
      <Route path="/sinergias">
        <Sinergias />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/registro">
        <Registro />
      </Route> -->

    </div>

    <div class="">
  <!--Schedule  -->
    <Schedule (orderTodos)/>
    
<!-- BITÁCORA -->
         <Binnacle /> 
     </div>


  </body>

<style>

    .wrapper-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, 13rem);
      justify-content: center; 
    }

    .optionCard{
      width: 100%;
      height: auto;
      background-color: aquamarine;
      padding-top: 5px;
    }

      .profile-img {
        width: 8rem;
        clip-path: circle(70px at center);
        margin-top: 1.5rem;
      }

      .name {
        font-weight: bold;
        font-size: 1.5rem;
      }

      body{
      width: 98%;
      margin: 0 auto;
    }

</style>
