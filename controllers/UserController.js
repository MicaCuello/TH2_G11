import User from '../models/User.js'; 
import Role from '../models/Role.js';

const UserController = {
  
  // Crear un usuario
  async createUser(req, res) {
    try {
      const { username, password, email, roleId } = req.body;

      const user = await User.create({
        username,
        password,
        email,
        roleId
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el usuario', error });
    }
  },

  // Listar todos los usuarios
  async listUsers(req, res) {
    try {
      const users = await User.findAll({
        include: {
          model: Role,
          attributes: ['name']  // Incluir el nombre del rol
        },
        attributes: { exclude: ['password'] }  // Excluir la contraseña de la respuesta
      });

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error al listar usuarios', error });
    }
  },

  // Eliminar un usuario por ID
  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      await user.destroy();

      res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
  },

  // Actualizar un usuario por ID
  async updateUser(req, res) {
    try {
        const { id } = req.params;
        const { username, password, email, roleId } = req.body;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        // Actualizar los campos del usuario
        user.username = username || user.username;
        user.password = password || user.password;
        user.email = email || user.email;
        user.roleId = roleId || user.roleId;

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
  }
};

export default UserController; 
