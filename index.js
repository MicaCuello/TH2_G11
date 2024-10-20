// index.js
import express from 'express'; // Asegúrate de usar import
import UserControllers from './controllers/UserControllers.js'; // Ajusta la ruta según tu estructura

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para manejar JSON

const userController = new UserControllers();

// Define las rutas utilizando los métodos del controlador
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
