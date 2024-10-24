// models/index.js
import Role from './Role.js';
import Permission from './Permission.js';
import RolePermission from './RolePermission.js';
import User from './User.js'; // Asegúrate de que también importas User

// Establecemos las relaciones
Role.hasMany(User, { foreignKey: 'RoleId', sourceKey: 'id', as: 'users' });
User.belongsTo(Role, { foreignKey: 'RoleId', targetKey: 'id', as: 'role' });

// Relaciones entre Role y Permission
Role.hasMany(RolePermission, { foreignKey: 'RoleId' });
Permission.hasMany(RolePermission, { foreignKey: 'PermissionId' });

export { Role, Permission, RolePermission, User };

