
/*
2. Realizar las siguientes consultas.
a. Listar todos los autores de que sean de Nacionalidad Argentina
b. Listar todos los autores que publicaron entre 1960 a 1980.
c. Mostrar el promedio de la edad de publicación.
d. Mostrar todos los autores.
*/
document.addEventListener("DOMContentLoaded", function() {
    const tablas = document.getElementsByTagName('table');
  
    let autores = [];
  
    for (let i = 0; i < tablas.length; i++) {
      const tabla = tablas[i];
      
      for (let j = 1; j < tabla.rows.length; j++) {
        const nombre = tabla.rows[j].cells[0].innerText;
        const apellido = tabla.rows[j].cells[1].innerText;
        const nacionalidad = tabla.rows[j].cells[2].innerText;
        const mejorObra = tabla.rows[j].cells[3].innerText;
        const añoPublicacion = parseInt(tabla.rows[j].cells[4].innerText);
        const edadPublicacion = parseInt(tabla.rows[j].cells[5].innerText);
  
        autores.push({
          Nombre: nombre,
          Apellido: apellido,
          Nacionalidad: nacionalidad,
          MejorObra: mejorObra,
          AñoPublicacion: añoPublicacion,
          EdadPublicacion: edadPublicacion
        });
      }
    }
  
    // a. Listar todos los autores que sean de Nacionalidad Argentina
    const autoresArgentinos = autores.filter(autor => autor.Nacionalidad.toLowerCase() === 'argentino');
    console.log('Autores Argentinos:');
    console.log(autoresArgentinos);
  
    // b. Listar todos los autores que publicaron entre 1960 a 1980
    const autoresP = autores.filter(autor => autor.AñoPublicacion >= 1960 && autor.AñoPublicacion <= 1980);
    console.log('Autores que publicaron entre 1960 y 1980:');
    console.log(autoresP);
  
    // c. Calcular el promedio de la edad de publicación
    const edadesPublicacion = autores.map(autor => autor.EdadPublicacion);
    const promedioEdadPublicacion = edadesPublicacion.reduce((total, edad) => total + edad, 0) / edadesPublicacion.length;
    console.log('Promedio de las pubicaciones:', promedioEdadPublicacion);
  
    // d. Mostrar todos los autores
    console.log('Autores:');
    console.log(autores);
  });
  