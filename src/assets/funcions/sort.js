// Acomoda por orden decendente lista. "object" es la objeto a ordenar,
//  "toSort" es el elemento de cada objeto a ordenar

// ----    NO FUNCIONÓOOOOO -------

let toSort;
   
export function sort(object, toSort){
   object.sort((a, b) => {
      if(a.toSort < b.toSort){
          return 1;
      } else if (a.toSort > b.toSort){
          return -1;
      } else {
          return 0;
      }
  })
}