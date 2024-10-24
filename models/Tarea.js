// models/Tarea.js

import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Tarea extends Model {}

// Inicializamos el modelo Tarea y definimos sus atributos y opciones.
Tarea.init(
  {
    // Atributo 'descripcion' para la descripción de la tarea.
    descripcion: {
      type: DataTypes.STRING, // El tipo de dato es una cadena de texto.
      allowNull: false, // Este campo es obligatorio.
    },
    
    // Atributo 'estado' para el estado de la tarea.
    estado: {
      type: DataTypes.STRING, // El tipo de dato es una cadena de texto.
      allowNull: false, // Este campo es obligatorio.
      defaultValue: 'not started', // Valor por defecto.
    },

    // Atributo 'fechaCreacion' para almacenar la fecha de creación.
    fechaCreacion: {
      type: DataTypes.DATE, // El tipo de dato es una fecha.
      defaultValue: DataTypes.NOW, // Valor por defecto es la fecha actual.
    },

    // Atributo 'fechaFinalizacion' para almacenar la fecha de finalización.
    fechaFinalizacion: {
      type: DataTypes.DATE, // El tipo de dato es una fecha.
      allowNull: true, // Este campo puede ser nulo.
    },

    // Atributo 'userId' para almacenar el ID del usuario asignado a la tarea.
    userId: {
      type: DataTypes.INTEGER, // El tipo de dato es un entero (referencia al usuario).
      allowNull: false, // Este campo es obligatorio.
      references: {
        model: 'Users', // Nombre de la tabla de usuarios (asegúrate de que tienes una tabla 'Users').
        key: 'id', // La clave primaria de la tabla de usuarios.
      },
    },
  },
  {
    // Opciones adicionales para configurar el modelo.
    sequelize: connection, // Conexión a la base de datos.
    modelName: "Tarea", // Nombre del modelo.
    tableName: "Tareas", // Nombre de la tabla en la base de datos.
    timestamps: false, // Desactiva la creación automática de las columnas createdAt y updatedAt.
  }
);

// Exportamos el modelo para que pueda ser utilizado en otras partes de la aplicación.
export default Tarea;
