import express from "express";
import RolesController from "../controllers/RolesController.js";
import auth from "../middleware/authentication.js";
import permission from "../middleware/roleAuth.js";

const router = express.Router();

// Listar todas los Roles
router.get("/", auth, permission("listarRoles"), RolesController.listarRoles);

export default router; // Exporta el router como exportación por defecto
