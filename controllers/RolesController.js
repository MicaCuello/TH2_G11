import Role from "../models/Role.js";

const RolesController = {
  // Listar todas las tareas
  async listarRoles(req, res) {
    try {
      // find all metodo para obtener los registros de la base de datos
      const roles = await Role.findAll();

      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ message: "Error al listar roles", error });
    }
  },
};

export default RolesController;
