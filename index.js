// index.js
// Aquí se inicia el servidor y se configura la aplicación general
import express from 'express'; // Asegúrate de usar import
import './models/index.js';
import UserControllers from './controllers/UserControllers.js'; // Importa el controlador correctamente

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para manejar JSON

const userController = new UserControllers(); // Crea la instancia correctamente

// Define las rutas utilizando los métodos del controlador
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});