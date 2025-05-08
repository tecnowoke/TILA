export async function post(req, res) {
    const data = await req.json();
    
    // Escribir el archivo db.json
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(process.cwd(), 'src', 'data', 'db.json');
  
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  
    return res.json({ message: 'Archivo db.json actualizado con éxito!' });
  }
  