// Importamos Sequelize, un ORM (Object-Relational Mapping) para interactuar con bases de datos SQL
import { Sequelize } from "sequelize";

// Creamos una instancia de Sequelize para configurar la conexión con la base de datos.
// Parámetros:
// 1. "jueves": nombre de la base de datos a la que nos queremos conectar.
// 2. "root": usuario de la base de datos (en este caso, el usuario por defecto de MySQL).
// 3. "": contraseña del usuario de la base de datos (en este caso, está vacía).
// 4. Un objeto con configuraciones adicionales como:
//    - host: el servidor de la base de datos (en este caso, "localhost").
//    - dialect: el tipo de base de datos que estamos usando (en este caso, "mysql").
//    - port: el puerto en el que se encuentra el servidor de MySQL (3306 por defecto).
const connection = new Sequelize("jueves", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

// Intentamos autenticar la conexión para verificar que todo está configurado correctamente.
try {
  // La función 'authenticate' se usa para probar si la conexión con la base de datos se establece correctamente.
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  // Si ocurre un error al intentar conectar, se captura en el bloque 'catch' y se imprime en la consola.
  console.error("Unable to connect to the database:", error);
}

// Exportamos la conexión para poder usarla en otras partes de la aplicación
export default connection;
