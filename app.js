const fs = require('fs');        //fs requerir a libreria 

let action = process.argv[2]        //proceso del usuario en index 2

const tareas = require('./tareas.js');      //importo tareas.js

switch (action) {
    case 'listar':
        const tareasArray = tareas.leerJSON();
            tareasArray.forEach((value, index) => {
            console.log((index+1) + ' ' + value.titulo + ' ' + value.estado);
        });
        break;

    case 'agregar':
        const tareaRecibida = process.argv[3];
        if(!tareaRecibida){
            console.log("No se ha insertado tarea"); 
            break;
        } 
        let tarea = {
            titulo:  process.argv[3],
            estado: 'pendiente',
          }
    
       tareas.guardarTarea(tarea);

       console.log(tarea.titulo + " : " + tarea.estado);
       
    case 'filtrar':                                                         
        const filtroRecibido = process.argv[3];
        if(!filtroRecibido){
            console.log("ingrese un filtro"); 
            break;
        } 
        const resultadoFiltrar = tareas.leerPorEstado(process.argv[3]);     
                resultadoFiltrar.forEach((value, index) => {
                console.log((index+1) + ' ' + value.titulo + ' ' + value.estado);
            });
            break;
    
    case 'undefined':
        console.log("Ingrese nueva tarea");
         break;
    
    default:
         console.log("Ingrese nueva tarea");
      
}