// Funcion para filtar por medio de SEARCH

   // Entradas item (array donde se busca la infromación), searchTerm( información requerida) y infFind (información buscada)

      export function searchProperty(items, searchTerm) {
         return items.filter((item) => {
            let infFind = (item.nameProperty.toLowerCase() + item.colonia.toLowerCase());
         return infFind.includes(searchTerm.toLowerCase());
         });
       };