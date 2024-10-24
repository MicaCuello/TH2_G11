// models/Role.js
import { DataTypes } from 'sequelize';
import sequelize from '../connection/connection.js';

const Role = sequelize.define('Role', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Exportar el modelo
export default Role;
