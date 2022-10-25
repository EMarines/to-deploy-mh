<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div>
    <!-- svelte-ignore security-anchor-rel-noreferrer -->
    <a href="https://matchhome.net" target="_blank"> 
      <img src="/logoMH.png" class="logo" alt="Vite Logo" />
    </a>
  </div>
  <h1>Math Home</h1>
  <h3>Bienes Raíces</h3>

  <div class="card">
    <!-- <Counter /> -->
  </div>

  <p>
    <!-- svelte-ignore security-anchor-rel-noreferrer -->
    Check out <a href="https://matchhome.net" target="_blank">Match Home</a>, the official Match Home app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #e7ef08aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
