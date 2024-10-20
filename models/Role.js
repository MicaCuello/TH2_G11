// models/Role.js
import { DataTypes } from 'sequelize';
import sequelize from '../connection/connection.js'; // Asegúrate de que la ruta sea correcta

// Definimos el modelo Role
const Role = sequelize.define('Role', {
  // Definimos los atributos del modelo
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, // Incremento automático para el ID
    primaryKey: true,    // Este campo es la clave primaria
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,    // Este campo no puede ser nulo
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,     // Este campo puede ser nulo
  },
}, {
  tableName: 'roles',    // Nombre de la tabla en la base de datos
  timestamps: false,     // Desactiva timestamps si no se utilizan
});

// Exportamos el modelo para que pueda ser utilizado en otras partes de la aplicación
export default Role;
