   <script>
      export let urlImage, claveEB, nameProperty, beds, bathroom, park, areaBuilding, areaTotal, price

   </script>
   
      <main >
         <section class="book-top-info" >
            <figure class="bkcont" >
               <img src={urlImage} alt={claveEB} class="bkcover" >
               <div class="language">{claveEB}</div>
               <figcaption>{nameProperty}</figcaption>
            </figure>
         </section> 
   
         <section class="book-bottom-links">
            <section class="from-pariyatti available-at">
               <div class="buy-options-cont">
                  <div>{beds} Recámaras</div>
                  <div>{bathroom} Baños</div>
                  <div>{park} Estacionamientos</div>
                  <div>{areaBuilding} m2 de Contruccion</div>
                  <div>{areaTotal} m2 de Terreno</div>
                  <br>
                  <div>
                     Precio $: {price}
                  </div>
               </div>
            </section>
         </section>                  

      </main>


<style>



   .book-top-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 3px solid #BA5626;
   }

   .buy-options-cont {
      padding: 5px ;
   }

   .bkcont {
      width: 100%;
      text-align: center;
   }

   .bkcover {
      width: 95%;
      height: 150px;
      margin-bottom: 5px;
      box-shadow: 0 0 3px gray;
   }

   div.language {
      font-size: .8em;
      margin: 5px 0;
   }

   figcaption {
      text-align: center;
      width: 90%;
      padding: 3px 10px;
      height: 36px;
      font-weight: bold;
   }

   .book-bottom-links {
   width: 100%;
   display: flex;
   align-items: flex-start;
   justify-content: center;  
   }

   .available-at {
   width: 100%;
   flex-direction: column;
   align-items: center;
   justify-content: center; 
   }

</style>

