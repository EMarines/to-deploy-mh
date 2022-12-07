

      // Tipo de propiedades
      export const typeProperties = [
        "Casa",
        "Terreno",
        "Departamento",
        "Casa o Departamento",
        "Local Comercial",
        "Edificio",
        "Casa de Campo"
      ];
    // Modo de contacto
        export const modeContact = [ 
          "Lona en Propiedad",
          "Propiedades.com",
          "NocNok",
          "Mercado Libre",
          "Vivanuncios",
          "Lamudi",
          "Inmuebles24",
          "Referido",
          "Otro",
        ]
    
    // Tipo de contacto
          export const typeContacts = [
            "Comprador",
            "Arrendatario",
            "Propietario",
            "En Captación",
            "Agente Asociado",
            "Agente Inmobiliario",
            "Constructor",
            "Inversionista",
            "En Trámite",
            "Otro",
          ];

    // Tipo de Operacion
          export let operations = ["Venta", "Renta"];


    // Modo de pago
          export const modePays = [
              "Contado", "Credito Hipotecario", "INFONAVIT", "COFINAVIT", "FOVISSSTE", "ALIADOS", "Conyugal"];

          export const contactMode = ["Telefono", "WhatsApp", "Email", "SMS"];

          export const typeOperation = ["Venta", "Renta"];

          export const ranges = ["Rango", "PRM", "SGN", "TRC", "CRT", "QNT", "SXT", "SPT"];

    // One to X
          export const oneTofive = [ 0, 1, 2, 3, 4, 5];
          export const oneToFour = [0, 1, 2, 3, 4];

   // Etapas del cliente
            export const contactStage = ["Etapa1", "Etapa2", "Etapa3", "Etapa4", "Etapa5" ] 

      // Tipo de propieatrio
            export const typeSaller = ["Dueño", "Familiar", "Inmobiliaria", "Conocido" ] 
            
      // Etiquetas
            export const tags = ["Fracc. Privado", "Frente a Parque", "Una Planta", "Recamara en P.B.", "Patio Amplio", "Lista para Habitarse", "Nueva"]

  // Importa la base de propiedades
      // import { db } from "../firebase";
      // import "@firebase/firestore";
      // import "@firebase/storage";
      
        // export let properties = [];
        //   db.collection("properties").onSnapshot((querySnapshot) => {
        //     let docs = [];
        //     querySnapshot.forEach((doc) => {
        //     docs.push({ ...doc.data(), id: doc.id });
        //     });
        //     properties = [...docs];
        //   });	


  // Importaciones para fecha 
        export let diaSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado' ];
        export let mesAnyo = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ];
      
