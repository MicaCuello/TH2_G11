import express from 'express';
import userRoutes from './userRoutes.js'; 
import tareaRoutes from './tareaRoutes.js'; 

const router = express.Router();

// Usar las rutas
router.use('/users', userRoutes);
router.use('/tareas', tareaRoutes);

export default router; 
