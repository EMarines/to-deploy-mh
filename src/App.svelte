<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div>
    <!-- svelte-ignore security-anchor-rel-noreferrer -->
    <a href="https://matchhome.net" target="_blank"> 
      <img src="https://firebasestorage.googleapis.com/v0/b/pruebastorageimages.appspot.com/o/logoMH.png?alt=media&token=20221d83-c171-4e8d-8312-73b1bbbe1a47" class="logo" alt="Vite Logo" />
    </a>
  </div>
  <h1>Math Home</h1>
  <h3>Bienes Raíces</h3>
  <h5>Tu patrimonio en buenas manos</h5>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis odio, ex modi nulla fugiat beatae fugit quas minima tenetur earum aspernatur incidunt veniam ullam repellat facere praesentium asperiores vel similique hic inventore officia possimus ducimus nisi! Accusamus perferendis pariatur enim ratione reiciendis minima, labore quibusdam voluptas mollitia praesentium quis rerum quae non, vero, esse possimus eum sapiente iusto nobis molestias.</p>

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
