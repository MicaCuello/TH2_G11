import { DataTypes } from 'sequelize'; // Cambia require por import
import sequelize from '../connection/connection.js';

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Role; // Exporta Role como exportación por defecto
