// Importamos los modelos Role y User, que representan las tablas en nuestra base de datos.
import Role from "./Role.js";
import User from "./User.js";

// Establecemos la relación entre las tablas:
// Un Role puede tener muchos usuarios (relación de uno a muchos).
Role.hasMany(User, {
  foreignKey: 'roleId', // Definimos la clave foránea en la tabla User que referencia a Role.
  sourceKey: 'id', // La clave primaria en la tabla Role que se relaciona con User.
  as: 'users' // Alias para identificar la relación (opcional pero útil para consultas).
});

// Un User pertenece a un Role (relación de muchos a uno).
User.belongsTo(Role, {
  foreignKey: 'roleId', // La clave foránea en la tabla User que referencia a Role.
  targetKey: 'id', // La clave primaria en la tabla Role que se relaciona con User.
  as: 'role' // Alias para identificar la relación (opcional pero útil para consultas).
});

// Exportamos los modelos para que puedan ser utilizados en otras partes de la aplicación.
export { Role, User };
