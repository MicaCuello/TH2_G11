import Role from "../models/Role.js";

const roleAuth = (requiredPermission) => {
  return async (req, res, next) => {
    const permissions = {
      Principal: [
        "crearUsuario",
        "listarUsuarios",
        "eliminarUsuario",
        "actualizarUsuario",
        "listarTarea",
        "crearTarea",
        "asignarTarea",
        "cambiarEstadoTarea",
        "cerrarTarea",
        "listarRoles",
      ],
      Administrador: [
        "listarUsuarios",
        "crearTarea",
        "asignarTarea",
        "cambiarEstadoTarea",
        "listarTarea",
        "cerrarTarea",
      ],
      Normal: [
        "crearTarea",
        "agregarComentario",
        "cambiarEstadoTarea",
        "cerrarTarea",
      ],
    };

    // Busca el rol del Usuario
    const userRole = await Role.findOne({ where: { id: req.authUser.roleId } });
    const userPermissions = permissions[userRole.name];

    if (!userPermissions.includes(requiredPermission)) {
      return res
        .status(403)
        .send("Access Denied: You do not have the correct permissions.");
    }

    next();
  };
};

export default roleAuth;
