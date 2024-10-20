// Importamos los modelos Role y User, que representan las tablas en nuestra base de datos.
import Role from "./Role.js";
import User from "./User.js";

// Establecemos la relación entre Role y User:
// Un Role puede tener muchos User (relación de uno a muchos).
Role.hasMany(User, {
  foreignKey: 'roleId', // Especificamos la clave foránea en la tabla User que referencia a Role.
  sourceKey: 'id', // Especifica la clave primaria de la tabla Role que será utilizada en User.
  as: 'users' // Alias para la relación, útil para identificar y consultar esta relación más fácilmente.
});

// Un User pertenece a un Role (relación de muchos a uno).
User.belongsTo(Role, {
  foreignKey: 'roleId', // Especificamos la clave foránea en la tabla User que apunta a la tabla Role.
  targetKey: 'id', // Especifica la clave primaria de la tabla Role que será utilizada en User.
  as: 'role' // Alias para la relación, simplificando la consulta y manejo de roles en los usuarios.
});

// Exportamos los modelos para que puedan ser utilizados en otras partes de la aplicación.
export { Role, User };
