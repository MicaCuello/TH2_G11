// models/RolePermission.js
import { DataTypes } from 'sequelize';
import sequelize from '../connection/connection.js';
import Role from './Role.js';
import Permission from './Permission.js';

const RolePermission = sequelize.define('RolePermission', {
  RoleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Role,
      key: 'id',
    },
  },
  PermissionId: {
    type: DataTypes.INTEGER,
    references: {
      model: Permission,
      key: 'id',
    },
  },
});

// Exportar el modelo
export default RolePermission;
