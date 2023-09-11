function dividirCadenaPorPuntos(cadena) {
    const trozos = [];
    let trozoActual = '';
  
    let puntos = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === '.') {
        puntos++;
        if (puntos > 1) {
          if (trozoActual !== '') {
            trozos.push(trozoActual.trim());
          }
          trozoActual = '';
        }
      }
      trozoActual += cadena[i];
    }
  
    if (trozoActual !== '') {
      trozos.push(trozoActual.trim());
    }
  
    return trozos;
  }
  
  
  function mostrarTrozosEnParrafos(trozos) {
    const contenedor = document.getElementById('contenedor');
  
    trozos.forEach((trozo) => {
      const parrafo = document.createElement('p');
      parrafo.textContent = trozo;
      contenedor.appendChild(parrafo);
    });
  }
  

  function mostrarTrozosEnParrafos(trozos) {
    const contenedor = document.getElementById('contenedor');
  
    trozos.forEach((trozo) => {
      const parrafo = document.createElement('p');
      parrafo.textContent = trozo;
      contenedor.appendChild(parrafo);
      
      
    });
  }
  
  
  const cadena = 'Hola esto. es un ejemplo. de cadena';
  const trozos = dividirCadenaPorPuntos(cadena);
  console.log(trozos);
  
  mostrarTrozosEnParrafos(trozos);
  
fetch('texto.txt')
.then(response => response.text())
.then(contenido => {
  const trozos = dividirCadenaPorPuntos(contenido);
  mostrarTrozosEnParrafos(trozos);
})
.catch(error => {
  console.error('Error al obtener el archivo:', error);
});