import { Router } from "express"; // Importa Router de Express para modularizar las rutas.
import userRoutes from "./userRoutes.js"; // Importa las rutas para las operaciones relacionadas con los usuarios.
import { logger } from "../middlewares/logger.js"; // Importa el middleware logger para registrar las solicitudes (peticiones).

const routes = Router(); // Crea una instancia de Router para definir las rutas principales.

// Middleware logger para registrar las solicitudes entrantes. Esto ayuda a monitorear la actividad en el servidor.
routes.use(logger);

// Rutas para usuarios: cualquier solicitud que empiece con "/user" será manejada por las rutas definidas en userRoutes.js.
routes.use("/user", userRoutes);

// Ejemplos de rutas adicionales que podrían habilitarse para otras entidades como roles y productos.
// Actualmente están comentadas, pero pueden habilitarse cuando se implementen esos archivos.
// routes.use("/roles", rolesRoutes);
// routes.use("/product", productRoutes);

// Exporta las rutas para que se puedan integrar en el archivo principal del servidor (por ejemplo, index.js).
export default routes;
