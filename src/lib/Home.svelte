<script>
	// import FindToErase from './../components/FindToErase.svelte';
  // import { db } from '../assets/db.js'
  import { Router, Route, Link } from "svelte-navigator";
  // import Contactos from './Contactos.svelte';
  // import Propiedades from './Propiedades.svelte';
  import Agenda from './Agenda.svelte';
  import Sinergias from './Sinergias.svelte';
  import Login from "./Registro.svelte";
  import Registro from "./Registro.svelte";
  // import Schedule from '../components/Schedule.svelte'
  // import Binnacle from '../components/Binnacle.svelte'
  // import user from '../assets/images/add-user.png';
  // import home from '../assets/images/house.png';
  // import schedule from '../assets/images/schedule.png';
  import team from '../assets/images/team.png';
  // import { dbContacts, dbProperties, dbTodos } from '../firebase'

  // let fecha;
  // let todos= [];

  // let ordeBinnacle= db.binnacle
  // let orderContacts = db.contactos
  // let orderTodos = db.todo


</script>

<body>



  <!-- Router Menú -->
  
    <div class="wrapper-grid">
      <Router>

        <!-- <Link to= "/contactos" title = "contactos">
          <div class="container" >
            <div class="optionCard">
              <p>{dbContacts.length} Contactos</p>
              <img src={user} alt='Buzon' class="profile-img">
              <h1 class="name">Contactos</h1>
            </div>
          </div>  
        </Link> -->

        <!-- <Link to= "/propiedades" title = "propiedades">
          <div class="container" >
            <div class="optionCard">
              <p>{dbProperties.length} Propiedades</p>
              <img src={home} alt='propiedad' class="profile-img">
              <h1 class="name">Propiedades</h1>
            </div>
          </div>  
        </Link> -->

        <!-- <Link to= "/agenda" title = "agenda">
          <div class="container" >
            <div class="optionCard">
              <p><strong>{dbTodos.length} Pendientes</strong></p>
              <img src={schedule} alt='agenda' class="profile-img">
              <h1 class="name">Agenda</h1>
            </div>
          </div>  
        </Link> -->

        <Link to= "/sinergias" title = "sinergias">
          <div class="container" >
            <div class="optionCard">
              <p> Sinergias</p>
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

      <Route path="/agenda">
        <Agenda />
      </Route>

      <!-- <Route path="/propiedades">
        <Propiedades />
      </Route> -->

      <Route path="/sinergias">
        <Sinergias />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/registro">
        <Registro />
      </Route>

    </div>

    <div class="">
  <!--Schedule  -->
    <!-- <Schedule (orderTodos)/> -->




<!-- BITÁCORA -->
         <!-- <Binnacle />  -->
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

/* .banner-img {
    position: absolute;
    height: 10rem;
    width: 100%; */
    /* background-image: url(https://images.unsplash.com/photo-1582727657635-c771002bdada?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ); */
    /* background-position: center;
    background-repeat: no-repeat;
    background-size: contain; */
  /* }  */

  /* .profile-img {
    width: 8rem;
    clip-path: circle(70px at center);
    margin-top: 1.5rem;
  } */

  .name {
    font-weight: bold;
    font-size: 1.5rem;
  }



</style>
