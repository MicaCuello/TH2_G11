import express from 'express';
import { logger } from './middlewares/logger.js'; // Importa el middleware

const app = express();

// Usa el middleware 'logger' para todas las rutas
app.use(logger);

// Ejemplo de una ruta
app.get('/users', (req, res) => {
  res.send('Lista de usuarios');
});

// Arranca el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
