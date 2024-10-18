import { User, Role } from "../models/index.js"; // Importa los modelos User y Role para interactuar con la base de datos.

class UserService {
  // Método para obtener todos los usuarios junto con su rol.
  getAllUsersService = async () => {
    try {
      // Busca todos los usuarios en la base de datos.
      const data = await User.findAll({
        attributes: ["name"], // Especifica que solo se debe recuperar el atributo 'name' de cada usuario.
        include: Role, // Incluye la relación con el modelo Role para obtener información del rol asociado a cada usuario.
      });
      return data; // Devuelve los datos de los usuarios.
    } catch (error) {
      throw error; // Si ocurre un error, se lanza para que pueda ser manejado en el controlador.
    }
  };

  // Método para obtener un usuario por su ID (aún no implementado).
  getUserByIdService = (id) => {
    return "get user by id service"; // Mensaje placeholder, debes implementar la lógica para buscar un usuario por su ID.
  };

  // Método para crear un nuevo usuario.
  createUserService = async (userData) => {
    try {
      // Crea un nuevo usuario en la base de datos con los datos proporcionados.
      const data = await User.create(userData);
      return data; // Devuelve el usuario creado.
    } catch (error) {
      throw error; // Si ocurre un error, se lanza para que pueda ser manejado en el controlador.
    }
  };

  // Método para actualizar un usuario por su ID (aún no implementado).
  updateUserService = (id) => {
    return "update user service"; // Mensaje placeholder, debes implementar la lógica para actualizar un usuario por su ID.
  };

  // Método para eliminar un usuario por su ID (aún no implementado).
  deleteUserService = (id) => {
    return "delete user service"; // Mensaje placeholder, debes implementar la lógica para eliminar un usuario por su ID.
  };
}

export default UserService; // Exporta la clase UserService para que pueda ser utilizada en el controlador.
