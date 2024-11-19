import sequelize from './connection/connection.js';
import {Role, User, Tarea} from './models/index.js';


// VER METODO> BULK CREATE 
const initializeData = async () => {
  try {
    // Sincronizar las tablas
    await sequelize.sync({ force: true });

    // Crear roles
    const roles = await Role.bulkCreate([
      { name: 'Principal' },
      { name: 'Administrador' },
      { name: 'Normal' }
    ]);

    // Crear usuarios con referencia a los roles
    const users = await User.bulkCreate([
      { username: 'PrincipalUser', password: 'PrincipalUser123', email: 'principal@example.com', roleId: roles[0].id },
      { username: 'AdminUser', password: 'AdminUser123', email: 'admin@example.com', roleId: roles[1].id },
      { username: 'NormalUser', password: 'NormalUser123', email: 'normal@example.com', roleId: roles[2].id }
    ]);

    // Crear tareas y asignarlas a los usuarios
    const tareas = await Tarea.bulkCreate([
      { description: 'Tarea 1 de prueba', status: 'PENDIENTE', createdById: users[1].id, assignedToId: users[2].id },
      { description: 'Tarea 2 de prueba', status: 'EN PROCESO', createdById: users[1].id, assignedToId: users[2].id }
    ]);

    console.log('Datos iniciales insertados correctamente.');
  } catch (error) {
    console.error('Error al inicializar datos:', error);
  }
  console.log('Datos inicializados');
}

export default initializeData;
