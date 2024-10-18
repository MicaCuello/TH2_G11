import UserService from "../services/UserService.js";

// Definimos la clase UserControllers que se encargará de manejar las operaciones CRUD para los usuarios.
class UserControllers {
  // Creamos una instancia de UserService para interactuar con la lógica de negocio relacionada a usuarios.
  userService = new UserService();

  // Método para obtener todos los usuarios.
  getAllUsers = async (req, res) => {
    try {
      // Llamamos al servicio para obtener todos los usuarios desde la base de datos.
      const users = await this.userService.getAllUsersService();
      // Enviamos una respuesta exitosa con el listado de usuarios.
      res.status(200).send({ success: true, message: users });
    } catch (error) {
      // Si ocurre un error, enviamos una respuesta con un código de error y el mensaje correspondiente.
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Método para obtener un usuario específico por su ID.
  getUserById = async (req, res) => {
    try {
      // Extraemos el ID del usuario de los parámetros de la solicitud (req.params).
      const { id } = req.params;
      // Validamos si se ha proporcionado el ID, si no, devolvemos un error.
      if (!id) {
        return res.status(400).send({ success: false, message: "User ID is required." });
      }

      // Llamamos al servicio para obtener el usuario con el ID proporcionado.
      const user = await this.userService.getUserByIdService(id);
      // Si el usuario no se encuentra, devolvemos un error 404 (no encontrado).
      if (!user) {
        return res.status(404).send({ success: false, message: "User not found." });
      }

      // Si el usuario existe, enviamos una respuesta exitosa con la información del usuario.
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      // En caso de error, devolvemos un mensaje con el código de error.
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Método para crear un nuevo usuario.
  createUser = async (req, res) => {
    try {
      // Extraemos los datos necesarios del cuerpo de la solicitud (name, pass, mail y RoleId).
      const { name, pass, mail, RoleId } = req.body;
      // Validamos que todos los campos estén presentes.
      if (!name || !pass || !mail || !RoleId) {
        return res.status(400).send({ success: false, message: "All fields are required." });
      }

      // Llamamos al servicio para crear el usuario con los datos proporcionados.
      const user = await this.userService.createUserService({ name, pass, mail, RoleId });
      // Enviamos una respuesta exitosa con el usuario creado y un código 201 (creado).
      res.status(201).send({ success: true, message: user });
    } catch (error) {
      // En caso de error, devolvemos un mensaje con el código de error.
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Método para actualizar un usuario existente.
  updateUser = async (req, res) => {
    try {
      // Extraemos el ID del usuario de los parámetros y los datos del cuerpo de la solicitud.
      const { id } = req.params;
      const { name, pass, mail, RoleId } = req.body;

      // Validamos que el ID esté presente.
      if (!id) {
        return res.status(400).send({ success: false, message: "User ID is required." });
      }

      // Llamamos al servicio para actualizar el usuario con el ID y los datos proporcionados.
      const updatedUser = await this.userService.updateUserService(id, { name, pass, mail, RoleId });
      // Si el usuario no se encuentra, devolvemos un error 404 (no encontrado).
      if (!updatedUser) {
        return res.status(404).send({ success: false, message: "User not found." });
      }

      // Enviamos una respuesta exitosa con la información del usuario actualizado.
      res.status(200).send({ success: true, message: updatedUser });
    } catch (error) {
      // En caso de error, devolvemos un mensaje con el código de error.
      res.status(400).send({ success: false, message: error.message });
    }
  };

  // Método para eliminar un usuario por ID.
  deleteUser = async (req, res) => {
    try {
      // Extraemos el ID del usuario de los parámetros de la solicitud.
      const { id } = req.params;
      // Validamos que el ID esté presente.
      if (!id) {
        return res.status(400).send({ success: false, message: "User ID is required." });
      }

      // Llamamos al servicio para eliminar el usuario con el ID proporcionado.
      const deletedUser = await this.userService.deleteUserService(id);
      // Si el usuario no se encuentra, devolvemos un error 404 (no encontrado).
      if (!deletedUser) {
        return res.status(404).send({ success: false, message: "User not found." });
      }

      // Enviamos una respuesta exitosa indicando que el usuario fue eliminado.
      res.status(200).send({ success: true, message: "User deleted successfully." });
    } catch (error) {
      // En caso de error, devolvemos un mensaje con el código de error.
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

// Exportamos la clase UserControllers para que pueda ser utilizada en otras partes de la aplicación.
export default UserControllers;
