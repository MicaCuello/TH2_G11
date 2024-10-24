// initialize.js
import sequelize from './connection/connection.js';
import Role from './models/Role.js';
import Permission from './models/Permission.js';
import RolePermission from './models/RolePermission.js';

async function inicializar() {
  await sequelize.sync({ force: true });

  // Crear roles
  const adminRole = await Role.create({ nombre: 'Administrador' });
  const userRole = await Role.create({ nombre: 'Usuario Normal' });

  // Crear permisos
  const crearTareaPermiso = await Permission.create({ nombre: 'Crear Tarea' });
  const verTareaPermiso = await Permission.create({ nombre: 'Ver Tarea' });

  // Asignar permisos a roles
  await RolePermission.create({ RoleId: adminRole.id, PermissionId: crearTareaPermiso.id });
  await RolePermission.create({ RoleId: adminRole.id, PermissionId: verTareaPermiso.id });
  await RolePermission.create({ RoleId: userRole.id, PermissionId: verTareaPermiso.id });

  console.log('Inicialización completada');
}

inicializar().catch(error => console.error(error));
