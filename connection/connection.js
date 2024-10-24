// Importamos Sequelize
import { Sequelize } from "sequelize";

// Creamos una instancia de Sequelize para configurar la conexión con la base de datos.
const connection = new Sequelize("test", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql", // Cambia 'mysql' a 'mssql'
  port: 3306, // El puerto por defecto de SQL Server es 1433
});

// Intentamos autenticar la conexión
try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Exportamos la conexión
export default connection;
