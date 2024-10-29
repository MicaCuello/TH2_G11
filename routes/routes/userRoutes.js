// routes/userRoutes.js

import express from 'express'; // Cambia require por import
import UserController from '../controllers/UserController.js'; // Cambia require por import y agrega .js

const router = express.Router();

// Crear un usuario
router.post('/', UserController.createUser);

// Listar todos los usuarios
router.get('/', UserController.listUsers);

// Eliminar un usuario por ID
router.delete('/:id', UserController.deleteUser);

export default router; // Exporta el router como exportación por defecto
