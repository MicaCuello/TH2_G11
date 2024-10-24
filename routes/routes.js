"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });

import { Router } from "express"; // Importa Router de Express para modularizar las rutas.
const userRoutes_js_1 = __importDefault(require("./userRoutes.js")); // Importa las rutas para las operaciones relacionadas con los usuarios.
const { logger } = __importDefault(require("../middlewares/logger.js")); // Asegúrate de que el nombre sea consistente.

const routes = (0, Router)(); // Crea una instancia de Router para definir las rutas principales.

// Middleware logger para registrar las solicitudes entrantes. Esto ayuda a monitorear la actividad en el servidor.
routes.use(logger);

// Rutas para usuarios: cualquier solicitud que empiece con "/user" será manejada por las rutas definidas en userRoutes.js.
routes.use("/user", userRoutes_js_1.default);

// Ejemplos de rutas adicionales que podrían habilitarse para otras entidades como roles y productos.
// Actualmente están comentadas, pero pueden habilitarse cuando se implementen esos archivos.
// routes.use("/roles", rolesRoutes);

// Exporta las rutas para que se puedan integrar en el archivo principal del servidor (por ejemplo, index.js).
const _default = routes;
export { _default as default };
