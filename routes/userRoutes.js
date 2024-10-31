import express from "express";
import UserController from "../controllers/UserController.js";
import auth from "../middleware/authentication.js";
import permission from "../middleware/roleAuth.js";

const router = express.Router();

// Crear un usuario
router.post("/", auth, permission("crearUsuario"), UserController.createUser);

// Listar todos los usuarios
router.get("/", auth, permission("listarUsuarios"), UserController.listUsers);

// Eliminar un usuario por ID
router.delete(
  "/:id",
  auth,
  permission("eliminarUsuario"),
  UserController.deleteUser
);

// Actualiza un usuario por ID
router.put(
  "/:id",
  auth,
  permission("actualizarUsuario"),
  UserController.updateUser
);

export default router;
