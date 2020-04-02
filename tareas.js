const fs = require('fs');     //fs requerir a libreria 

let archivoTareas = {         //array de objetos literales
  archivo: './tareas.json',   //el archivo llama al json
  
  leerJSON: function () {
    return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));    //se le agrega un callback pidiendo la conversion de JSON a JS. "this.archivo = './tareas.json'"
  },

  escribirJSON: function (tareas) {                               //
    fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
  },

  guardarTarea: function (tarea) {                                //agregar tareas
    let tareas = this.leerJSON();
    tareas.push(tarea);
    this.escribirJSON(tareas);                                    //guardarTarea.escribirJSON
  },

  leerPorEstado: function (estado) {                              //filtrar tareas
    let tareas = this.leerJSON();
    tareasFiltradasPorEstado = tareas.filter((tarea) => {
      return tarea.estado === estado;
    });  

    return tareasFiltradasPorEstado;
  }
}

module.exports = archivoTareas;  