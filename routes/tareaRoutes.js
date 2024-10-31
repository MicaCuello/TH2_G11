import express from 'express'; 
import TareaController from '../controllers/TareaController.js'; 
import auth from '../middleware/authentication.js';
import permission from '../middleware/roleAuth.js';

const router = express.Router();

// Crear una tarea
router.post('/', auth, permission('crearTarea'), TareaController.createTarea);

// Listar todas las tareas
router.get('/', auth, permission('listarTarea'), TareaController.listTareas);

// Cerrar una tarea (marcar como "TERMINADO") por ID
router.put('/close/:id', auth, permission('cerrarTarea'),  TareaController.closeTarea);

export default router; // Exporta el router como exportación por defecto
