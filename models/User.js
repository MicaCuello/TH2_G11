import { DataTypes } from 'sequelize';
import sequelize from '../connection/connection.js'; // Importa sequelize
import Role from '../models/Role.js'; // Asegúrate de que la ruta sea correcta

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  }
}, {
  timestamps: false
});

// Relación con Role
User.belongsTo(Role, { foreignKey: 'roleId' });

export default User; // Exportar el modelo User
