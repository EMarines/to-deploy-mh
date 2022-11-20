
import { conInterest } from '../../stores/stores';
import { mosRange } from '../funcions/rangValue'

let conIntB = [];
let conIntR = [];
let conInt = [];

// Filtrar property -- properties
    export function filtPropContInte($property, conInt){
      // console.log(conInt)
  // Tipo de propiedad
        conInt = conInt.filter((item) => item.selecTP === $property.selectTP);
        // console.log("tipo Prop", conInt)

  // Numero de recámaras   
        if ($property.numBeds > 0) {
        conInt = conInt.filter((item) => item.numBeds >= $property.beds);
        };
        // console.log("recamaras", conInt)

  // Numero de baños
        if ($property.numBaths > 0) {
          conInt = conInt.filter((item) => item.numBaths >= $property.bathroom);
        };
        // console.log("baños ", $property.numBaths, conInt)

  // Estacionamientos
        if ($property.numParks > 0) {
          conInt = conInt.filter((item) => item.numPark >= $property.parks);
        };

  // Presupuesto
        //  
        try {
              conInt = conInt.filter((cont) =>{                
              if(cont.budget){
                conIntB = conInt.filter((cont) => cont.budget >= $property.price *.7 && cont.budget <= $property.price * 1.1 )
              } else {
                conIntR = conInt.filter((cont) => cont.rangeProp === mosRange($property.price));
              };              
            });            
          } catch (error) {
            console.log(error)
          }
          conInt = conIntR.concat(conIntB) 
          conIntB=[];
          conIntR=[];
          // console.log(conInt)

  // Filtra por Ubicación  
          try {
            conInt.filter((cont) => {
              if(cont.locaProperty.length > 0){
                conIntB = conInt.filter(con => ($property.locaProperty).some(c => (con.locaProperty).includes(c)));
              } else {
                conIntR = conInt.filter((cont) => cont.locaProperty.length === 0)
              }
            });            
          } catch (error) {
            console.log(error)
          }
          // console.log(conIntB, conIntR)
          conInt = conIntR.concat(conIntB) 
          conIntB=[];
          conIntR=[];
          // console.log(conInt)
          
  // Filtra por Etiquetas
          try {
            conInt = conInt.filter((cont) => {
              if(cont.tagsProperty.length > 0){
                conIntB= conInt.filter(e => $property.tagsProperty.some(c => e.tagsProperty.includes(c)));
          } else {
                conIntR = conInt.filter((cont) => cont.tagsProperty.length === 0)
              }
            });            
          } catch (error) {
            console.log(error)
          };

          // return conInt 
          // conIntB=[];
          // conIntR=[];
          conInt = conIntR.concat(conIntB) 
          return conInterest.set(conInt)
    };


