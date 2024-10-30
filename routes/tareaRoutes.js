// routes/tareaRoutes.js

import express from 'express'; // Cambia require por import
import TareaController from '../controllers/TareaController.js'; // Cambia require por import y agrega .js

const router = express.Router();

// Crear una tarea
router.post('/', TareaController.createTarea);

// Listar todas las tareas
router.get('/', TareaController.listTareas);

// Cerrar una tarea (marcar como "TERMINADO") por ID
router.put('/close/:id', TareaController.closeTarea);

export default router; // Exporta el router como exportación por defecto
