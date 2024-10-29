import { DataTypes } from 'sequelize'; // Cambiar require por import
import sequelize from '../connection/connection.js'; 
import User from './User.js'; // Cambiar require por import

const Tarea = sequelize.define('Tarea', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  endDate: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.ENUM('PENDIENTE', 'TERMINADO', 'EN PROCESO'),
    defaultValue: 'PENDIENTE'
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: false
});

// Relación con el usuario (quien la creó y a quién está asignada)
Tarea.belongsTo(User, { as: 'createdBy', foreignKey: 'createdById' });
Tarea.belongsTo(User, { as: 'assignedTo', foreignKey: 'assignedToId' });

export default Tarea; // Cambiar module.exports por export default
