// models/Permission.js
import { DataTypes } from 'sequelize';
import sequelize from '../connection/connection.js';

const Permission = sequelize.define('Permission', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Exportar el modelo
export default Permission;
