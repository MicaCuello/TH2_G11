"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserControllers_1 = __importDefault(require("../controllers/UserControllers"));

const router = express_1.default.Router();
const userControllers = new UserControllers_1.default();

// Definimos las rutas y sus respectivos métodos del controlador.
router.get('/users', userControllers.getAllUsers); // Obtener todos los usuarios
router.get('/users/:id', userControllers.getUserById); // Obtener un usuario por ID
router.post('/users', userControllers.createUser); // Crear un nuevo usuario
router.put('/users/:id', userControllers.updateUser); // Actualizar un usuario existente
router.delete('/users/:id', userControllers.deleteUser); // Eliminar un usuario

const _default = router;
export { _default as default };

