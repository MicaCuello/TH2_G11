import User from './User.js'; 
import Role from './Role.js';
import Tarea from './Tarea.js';

// Configurar relaciones entre modelos
Role.hasMany(User, { foreignKey: 'roleId', as: 'users' });
User.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });

User.hasMany(Tarea, { foreignKey: 'createdById', as: 'createdTasks' });
User.hasMany(Tarea, { foreignKey: 'assignedToId', as: 'assignedTasks' });
Tarea.belongsTo(User, { foreignKey: 'createdById', as: 'creator' });
Tarea.belongsTo(User, { foreignKey: 'assignedToId', as: 'assignee' });

// Exportar los modelos
export { Role, User, Tarea };

// Exportación por defecto de un objeto que contiene todos los modelos
export default{
    Role,
    User,
    Tarea
};
