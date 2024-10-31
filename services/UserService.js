import { User, Role } from "../models/index.js"; // Usa import para importar los modelos.

class UserService {
  // Método para obtener todos los usuarios junto con su rol.
  getAllUsersService = async () => {
    try {
      const data = await User.findAll({
        attributes: ["name"], // Especifica que solo se debe recuperar el atributo 'name' de cada usuario.
        include: Role, // Incluye la relación con el modelo Role.
      });
      return data; // Devuelve los datos de los usuarios.
    } catch (error) {
      throw error; // Si ocurre un error, se lanza para que pueda ser manejado en el controlador.
    }
  };

  // Método para obtener un usuario por su ID.
  getUserByIdService = async (id) => {
    try {
      const user = await User.findByPk(id); // Busca el usuario por su ID.
      return user; // Devuelve el usuario encontrado.
    } catch (error) {
      throw error; // Maneja errores si es necesario.
    }
  };

  // Método para crear un nuevo usuario.
  createUserService = async (userData) => {
    try {
      const data = await User.create(userData);
      return data; // Devuelve el usuario creado.
    } catch (error) {
      throw error; // Maneja errores si es necesario.
    }
  };

  // Método para actualizar un usuario por su ID.
  updateUserService = async (id, userData) => {
    try {
      const user = await User.findByPk(id); // Busca el usuario por su ID.
      if (!user) return null; // Si no existe, devuelve null.
      
      await user.update(userData); // Actualiza el usuario con los nuevos datos.
      return user; // Devuelve el usuario actualizado.
    } catch (error) {
      throw error; // Maneja errores si es necesario.
    }
  };

  // Método para eliminar un usuario por su ID.
  deleteUserService = async (id) => {
    try {
      const user = await User.findByPk(id); // Busca el usuario por su ID.
      if (!user) return null; // Si no existe, devuelve null.

      await user.destroy(); // Elimina el usuario.
      return user; // Devuelve el usuario eliminado.
    } catch (error) {
      throw error; // Maneja errores si es necesario.
    }
  };
}

export default UserService; // Usa export para exportar la clase.
