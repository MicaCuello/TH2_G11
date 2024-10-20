// controllers/UserControllers.js
import UserService from '../services/UserService.js'; // Usa import para importar el servicio.

class UserControllers {
  userService = new UserService();

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userService.getAllUsersService();
      res.status(200).send({ success: true, message: users });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).send({ success: false, message: "User ID is required." });
      }

      const user = await this.userService.getUserByIdService(id);
      if (!user) {
        return res.status(404).send({ success: false, message: "User not found." });
      }

      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUser = async (req, res) => {
    try {
      const { name, pass, mail, RoleId } = req.body;
      if (!name || !pass || !mail || !RoleId) {
        return res.status(400).send({ success: false, message: "All fields are required." });
      }

      const user = await this.userService.createUserService({ name, pass, mail, RoleId });
      res.status(201).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, pass, mail, RoleId } = req.body;

      if (!id) {
        return res.status(400).send({ success: false, message: "User ID is required." });
      }

      const updatedUser = await this.userService.updateUserService(id, { name, pass, mail, RoleId });
      if (!updatedUser) {
        return res.status(404).send({ success: false, message: "User not found." });
      }

      res.status(200).send({ success: true, message: updatedUser });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).send({ success: false, message: "User ID is required." });
      }

      const deletedUser = await this.userService.deleteUserService(id);
      if (!deletedUser) {
        return res.status(404).send({ success: false, message: "User not found." });
      }

      res.status(200).send({ success: true, message: "User deleted successfully." });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserControllers; // Usa export para exportar la clase.
