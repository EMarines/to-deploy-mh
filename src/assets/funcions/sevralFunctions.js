// import { db } from '../db'
import { proInterest, property } from '../../stores/stores'
const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado' ];
const mesAnyo = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ];
let fecha;
let saludoHora;
let newFecha



// Convertir fecha en timestamp a formato legible SIN hora
      export function formatDate(fecha){
          fecha = new Date(fecha);
        let dia = fecha.getDate();
          if(typeof fecha != "string"){
            dia = dia + 1;
          }
          if(dia < 10){
            dia = '0' + dia
          }
          let mes = mesAnyo[fecha.getMonth()];
          let ano = fecha.getFullYear();

          return (`${dia}/${mes}/${ano}`)
       }

// Convertir HORA en timestamp   
      export function formatHour(fecha){
          fecha = new Date(fecha)
          let minutes = fecha.getMinutes();
            if(minutes.length < 2){
              minutes = '0' + minutes
            }
          let hora = fecha.getHours();
          if (hora > 12){
            hora = hora - 12
          }
          
          if(hora < 10){
              hora = '0' + hora
            }
            
          let dia = fecha.getDate();
          if(dia < 10)
            dia = '0' + dia

          return (`${hora}:${minutes}`)
       }
      

//  Extraer dia de la semana
        export function formatDay(fecha){
          fecha = new Date(+fecha)
            let dia = diaSemana[fecha.getDay()];

          return (`${dia}-`)
          };

// Definir si es dia, tarde o noche
        export function diaTarde(){
          fecha = new Date()
          let hora = fecha.getHours()
          if(hora < 12){
            saludoHora = "Buenos días."
          } else if (hora < 8){
            saludoHora = "Buenas tardes."
          } else {
            saludoHora = "Buenas noches."
          }
          return saludoHora
        }

// Copiar al portapapeles

  // export function copyToPaste(text) {
  //   console.log(text)
  //  text.select();
  //   document.execCommand("copy")
    // // @ts-ignore
    // navigator.clipboard.readText(text)
    // .then(() => {
    //     console.log('Text copied to clipboard: ', text);
    // })
    // .catch(err => {
    //     console.error('Error in copying text: ', err);
    // });
  // };

        


        