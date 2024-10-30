import express from 'express';
import sequelize from './connection/connection.js'; // Cambia la ruta aquí
import routes from './routes/router.js'; // Asegúrate de agregar .js
import initializeData from './initialize.js';


const app = express();

app.use(express.json());

// Usar las rutas
app.use('/', routes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false })
  .then(async () => {
    console.log('Base de datos sincronizada');

    // Inicializar los datos de prueba
    await initializeData.js();

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
  });
