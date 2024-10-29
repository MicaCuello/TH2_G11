import { Sequelize } from 'sequelize';

// Cambia 'tp_taller' por el nombre de tu base de datos
const sequelize = new Sequelize('tp_taller', null, null, {
    host: '127.0.0.1', // o 'localhost' si lo prefieres
    dialect: 'mssql',   // Dialecto de la base de datos
    port: 1433,         // Puerto por defecto para SQL Server
    dialectOptions: {
        // Esto habilita la autenticación de Windows
        options: {
            trustedConnection: true, // Permite la autenticación integrada de Windows
        },
    },
});

// Función para probar la conexión
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

// Llama a la función para probar la conexión
testConnection();

export default sequelize; // Exporta el objeto sequelize
