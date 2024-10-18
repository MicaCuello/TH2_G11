import express from "express";
import userRoutes from "./routes/userRoutes.js";


const app = express();
const PORT = 8000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Usar las rutas de usuarios
app.use("/api/users", userRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
