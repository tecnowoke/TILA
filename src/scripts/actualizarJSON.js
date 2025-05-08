const SHEET_ID = '1nP83DprTj83JsV0fKSjSTkw4jxI99-Ha0bemI372iq8'; // Reemplaza con tu ID de Google Sheets
const API_KEY = 'AIzaSyB1F8PIVoZYypVWZhCoWYVkd39ISzwNbw0'; // Reemplaza con tu clave API
const RANGE = '1!A2:E20'; // El rango de tu hoja de cálculo (Hoja "1", columnas A-E, filas 2-20)

// Función para obtener los datos de Google Sheets
async function obtenerDatos() {
  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`);
  const data = await response.json();
  return data.values;
}

// Función para convertir los datos de la hoja en un objeto JSON
async function actualizarJSON() {
  const datos = await obtenerDatos();
  
  // Crear un array de objetos JSON a partir de los datos obtenidos
  const json = datos.map(fila => ({
    id: fila[0],         // Columna A
    nombre: fila[1],     // Columna B
    email: fila[2],      // Columna C
    telefono: fila[3],   // Columna D
    direccion: fila[4],  // Columna E
  }));

  console.log(json); // Aquí puedes ver los datos en la consola para depurar

  // Convertir el array a una cadena JSON con formato
  const jsonString = JSON.stringify(json, null, 2);

  // Enviar los datos al servidor para actualizar el archivo JSON
  await fetch('/api/actualizar-json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonString,
  });

  alert('JSON actualizado con éxito!');
}

// Agregar el evento de clic al botón
document.getElementById('actualizar-btn').addEventListener('click', actualizarJSON);
