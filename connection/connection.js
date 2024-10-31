import { Sequelize } from "sequelize";

const sequelize = new Sequelize("tp_taller", "sa", "mica123", {
  host: "localhost",
  dialect: "mssql",
  port: 1433,
  logging: console.log, // Habilita el logging para depurar
});

// Función para probar la conexión
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error.message);
    console.error("Detalles del error:", error);
  }
};

// Llama a la función para probar la conexión
testConnection();

export default sequelize;
