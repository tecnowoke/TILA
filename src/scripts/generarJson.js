import fs from 'fs';
import fetch from 'node-fetch'; // Asegúrate de instalar 'node-fetch' si aún no está instalado

const SHEET_ID = '1nP83DprTj83JsV0fKSjSTkw4jxI99-Ha0bemI372iq8'; // Reemplaza con tu ID de Google Sheets
const API_KEY = 'AIzaSyB1F8PIVoZYypVWZhCoWYVkd39ISzwNbw0'; // Reemplaza con tu clave API
const RANGE = '1!A2:E20'; // El rango de tu hoja de cálculo

// Función para obtener los datos desde Google Sheets
async function obtenerDatos() {
  try {
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`);
    const data = await response.json();
    
    // Verifica si 'values' existe en la respuesta
    if (!data.values) {
      throw new Error("No se encontraron datos en la respuesta.");
    }
    return data.values;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return []; // Retorna un array vacío en caso de error
  }
}

// Función principal para generar el archivo JSON
async function generarJson() {
  const datos = await obtenerDatos();

  if (datos.length > 0) {
    // Ruta donde se guardará el archivo JSON
    const dirPath = './src/data';  // Directorio donde se guardará el archivo JSON
    const filePath = `${dirPath}/db.json`; // Ruta completa del archivo

    // Crear el directorio si no existe
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Escribir los datos en el archivo
    fs.writeFileSync(filePath, JSON.stringify(datos, null, 2), 'utf8');

    console.log('Datos guardados en', filePath);
  } else {
    console.log('No se encontraron datos para guardar.');
  }
}

// Llamar a la función para generar el archivo JSON
generarJson();
