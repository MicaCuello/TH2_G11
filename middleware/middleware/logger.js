import express from 'express';
import { logger } from './middlewares/logger.js'; // Importa func. middleware

const app = express();

// Express lo ejecuta en el orden que se definieron
app.use(logger);

// Arranca el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
