import { DataTypes } from "sequelize";
import sequelize from "../connection/connection.js";
import bcrypt from "bcrypt";
import Role from "../models/Role.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

// Relación con Role
User.belongsTo(Role, { foreignKey: "roleId" });

// Hook para hashear el password antes de crear el usuario
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10); // Genera un salt
  user.salt = salt; // Asigna el salt generado
  const hash = await bcrypt.hash(user.password, salt); // Hashea la contraseña
  user.password = hash; // Asigna el hash a la propiedad password
});

// Método para comparar contraseñas
User.prototype.comparePassword = async function (myPlaintextPassword) {
  return await bcrypt.compare(myPlaintextPassword, this.password);
};



export default User;
