// models/User.js
import { DataTypes } from 'sequelize';
import sequelize from '../connection/connection.js';
import Role from './Role.js';

const User = sequelize.define('User', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  RoleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: 'id',
    },
  },
});

// Exportar el modelo
export default User;
