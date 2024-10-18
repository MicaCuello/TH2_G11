import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

// Creamos una clase User que extiende de Sequelize.Model para definir la estructura de la tabla en la base de datos.
class User extends Model {}

// Inicializamos el modelo User y definimos sus atributos y opciones.
User.init(
  {
    // Atributo 'name' que almacena el nombre del usuario.
    name: {
      type: DataTypes.STRING, // El tipo de dato es una cadena de texto.
      allowNull: false, // Este campo es obligatorio, no puede ser nulo.
    },
    // Atributo 'mail' para el correo electrónico del usuario.
    mail: {
      type: DataTypes.STRING, // El tipo de dato es una cadena de texto.
      allowNull: false, // Este campo es obligatorio, no puede ser nulo.
      unique: true, // El correo debe ser único en la base de datos.
      isEmail: true, // Validación para asegurarse de que el formato sea un correo electrónico.
    },
    // Atributo 'pass' que almacena la contraseña del usuario.
    pass: {
      type: DataTypes.STRING, // El tipo de dato es una cadena de texto.
      allowNull: false, // Este campo es obligatorio, no puede ser nulo.
    },
    // Atributo 'RoleId' para almacenar el ID del rol asociado al usuario.
    RoleId: {
      type: DataTypes.INTEGER, // El tipo de dato es un entero (referencia a la tabla Roles).
      defaultValue: 2, // Valor por defecto de 2 (por ejemplo, para usuarios regulares).
    },
  },
  {
    // Opciones adicionales para configurar el modelo.
    sequelize: connection, // Conexión a la base de datos que configuramos en connection.js.
    modelName: "User", // Nombre del modelo (como se referirá en Sequelize internamente).
    tableName: "Users", // (Opcional) Nombre de la tabla en la base de datos.
    timestamps: false, // Desactiva la creación automática de las columnas createdAt y updatedAt.
  }
);

// Exportamos el modelo para que pueda ser utilizado en otras partes de la aplicación.
export default User;
