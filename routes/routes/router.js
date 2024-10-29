// routes/router.js

import express from 'express'; // Cambia require por import
import userRoutes from './userRoutes.js'; // Cambia require por import y agrega .js
import tareaRoutes from './tareaRoutes.js'; // Cambia require por import y agrega .js

const router = express.Router();

// Usar las rutas
router.use('/users', userRoutes);
router.use('/tareas', tareaRoutes);

export default router; // Exporta el router como exportación por defecto
