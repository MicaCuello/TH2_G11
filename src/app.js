import express from 'express';
import connection from './connection/connection.js'; // Ajusta la ruta según tu estructura
import { Role, Permission, RolePermission } from './models/index.js';

const app = express();

const iniciarServidor = async () => {
    try {
        await connection.authenticate();
        console.log('Conexión ha sido establecida correctamente.');

        // Llama a la función de inicialización
        await inicializarDatos();

        app.listen(3000, () => {
            console.log('Servidor en ejecución en http://localhost:3000');
        });
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

// Función de inicialización
const inicializarDatos = async () => {
    try {
        // Crear roles
        const admin = await Role.create({ nombre: "Administrador" });
        const broker = await Role.create({ nombre: "Broker" });
        const user = await Role.create({ nombre: "Usuario" });

        // Crear permisos
        const crearTarea = await Permission.create({ nombre: "Crear Tarea" });
        const editarTarea = await Permission.create({ nombre: "Editar Tarea" });
        const eliminarTarea = await Permission.create({ nombre: "Eliminar Tarea" });

        // Relacionar roles y permisos
        await RolePermission.create({ rolId: admin.id, permisoId: crearTarea.id });
        await RolePermission.create({ rolId: admin.id, permisoId: editarTarea.id });
        await RolePermission.create({ rolId: admin.id, permisoId: eliminarTarea.id });

        console.log("Datos iniciales insertados correctamente.");
    } catch (error) {
        console.error("Error al inicializar datos:", error);
    }
};

// Inicia el servidor
iniciarServidor();
