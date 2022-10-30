// Acomoda por orden decendente lista. "object" es la objeto a ordenar,
//  "toSort" es el elemento con el cual se va a ordenar

  
export function sort(object){
    // console.log("Estas en la funcion", object);
   object.sort((a, b) => {
      if(new Date(a.endTask) < new Date(b.endTask)){
          return 1;
      } else if (new Date(a.endTask) > new Date(b.endTask)){
          return -1;
      } else {
          return 0;
      }
  })
}