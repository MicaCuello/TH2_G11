import sequelize from './connection/connection.js';
import User from './models/User.js'; 
import Role from './models/Role.js';
import Tarea from './models/Tarea.js';

const initializeData = async () => {
  try {
    // Sincronizar las tablas
    await sequelize.sync({ force: true });

    // Crear roles
    const rolePrincipal = await Role.create({ name: 'Principal' });
    const roleAdmin = await Role.create({ name: 'Administrador' });
    const roleNormal = await Role.create({ name: 'Normal' });

    // Crear usuarios
    const userPrincipal = await User.create({
      username: 'principalUser',
      password: 'password123',
      email: 'principal@example.com',
      roleId: rolePrincipal.id
    });

    const userAdmin = await User.create({
      username: 'adminUser',
      password: 'password123',
      email: 'admin@example.com',
      roleId: roleAdmin.id
    });

    const userNormal = await User.create({
      username: 'normalUser',
      password: 'password123',
      email: 'normal@example.com',
      roleId: roleNormal.id
    });

    // Crear tareas
    const tarea1 = await Tarea.create({
      description: 'Tarea 1 de prueba',
      status: 'PENDIENTE',
      createdById: userAdmin.id,
      assignedToId: userNormal.id
    });

    const tarea2 = await Tarea.create({
      description: 'Tarea 2 de prueba',
      status: 'EN PROCESO',
      createdById: userAdmin.id,
      assignedToId: userNormal.id
    });

    console.log('Datos iniciales insertados correctamente.');
  } catch (error) {
    console.error('Error al inicializar datos:', error);
  }
  console.log('Datos inicializados');
}

export default initializeData;
