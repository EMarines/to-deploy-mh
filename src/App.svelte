<script>
  import Navbar from './lib/Navbar.svelte'
  import logoMH from '../src/assets/images/logoMH.png'

  let showIntro = true;

setTimeout(()=>{
  showIntro = false
}, 1500)
</script>

<nav class="navBar">
  <Navbar />
</nav>

<body>
  {#if showIntro}
    <div class="intro">
      <h1 class="title">Bienvendo a</h1>
      <img src={logoMH} alt="MatchHome">
      <div class="">
        <p class="desc__intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut aliquam, expedita perferendis consequatur modi omnis! Nostrum iste necessitatibus quisquam numquam, aliquam ipsum. Sit, similique quis. Fuga vitae possimus quisquam quam. Unde accusantium neque veniam reprehenderit, laborum, magni ut quasi asperiores a amet fugiat non, sapiente obcaecati voluptas ab! Nostrum!</p>
        <p><strong> www.matchhome.net</strong></p>
      </div>
    </div>
  {/if}
</body>

<style>
  .intro{
    display: column;
    width: 600px;
    margin: 0 auto;
  }

  .title{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    /* margin: 0 auto; */
  }
  img{
    display: flex;
    width: 300px;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    padding-bottom: 30px;
  }

  .desc__intro{
    display: flex;
    justify-self: center;
    width: 600px;
    padding: 10px;
  }
</style>


