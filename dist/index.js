"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_js_1 = __importDefault(require("./routes/userRoutes.js"));
const app = (0, express_1.default)();
const PORT = 8000;
// Middleware para parsear el cuerpo de las solicitudes
app.use(express_1.default.json());
// Usar las rutas de usuarios
app.use("/api/users", userRoutes_js_1.default);
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
