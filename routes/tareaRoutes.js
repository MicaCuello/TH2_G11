// routes/tareaRoutes.js
import { Router } from 'express';
import { crearTarea, listarTareas } from '../controllers/TareaController';
import authorizeRoles from '../middleware/authorization.js'; // Asegúrate de importar el middleware
import { ROLES } from '../models/Role.js'; // Asegúrate de importar los roles

const router = Router();

// Ruta para crear una tarea (solo para usuarios normales y administradores)
router.post('/tareas', authorizeRoles(ROLES.NORMAL_USER.name, ROLES.ADMIN.name), crearTarea);

// Ruta para listar todas las tareas (solo para administradores)
router.get('/tareas', authorizeRoles(ROLES.ADMIN.name), listarTareas);

export default router;
