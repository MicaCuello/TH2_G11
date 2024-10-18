import { Router } from "express"; // Importa el módulo Router de Express para definir las rutas.
import UserControllers from "../controllers/userControllers.js"; // Importa el controlador de usuarios.

// Crea una instancia del controlador de usuarios.
const userControllers = new UserControllers();

// Crea una instancia de Router para definir las rutas específicas de usuarios.
const userRoutes = Router();

// Define la ruta para obtener todos los usuarios.
// Al hacer una solicitud GET a "/api/users", se ejecutará el método getAllUsers del controlador.
userRoutes.get("/", userControllers.getAllUsers);

// Define la ruta para obtener un usuario específico por ID.
// Al hacer una solicitud GET a "/api/users/:id", se ejecutará el método getUserById del controlador.
userRoutes.get("/:id", userControllers.getUserById);

// Define la ruta para crear un nuevo usuario.
// Al hacer una solicitud POST a "/api/users", se ejecutará el método createUser del controlador.
userRoutes.post("/", userControllers.createUser);

// Define la ruta para actualizar un usuario existente por ID.
// Al hacer una solicitud PUT a "/api/users/:id", se ejecutará el método updateUser del controlador.
userRoutes.put("/:id", userControllers.updateUser);

// Define la ruta para eliminar un usuario por ID.
// Al hacer una solicitud DELETE a "/api/users/:id", se ejecutará el método deleteUser del controlador.
userRoutes.delete("/:id", userControllers.deleteUser);

// Exporta las rutas de usuarios para que puedan ser utilizadas en el archivo principal del servidor.
export default userRoutes;
