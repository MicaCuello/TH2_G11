// controllers/TareaController.js
const Tarea = require('../models/Tarea');
const Usuario = require('../models/Usuario');

// Función para crear una nueva tarea
const crearTarea = async (req, res) => {
    try {
        const { descripcion, usuarioId } = req.body;
        const nuevaTarea = await Tarea.create({ descripcion, usuarioId });
        res.status(201).json(nuevaTarea);
    } catch (error) {
        console.error(error); // Agrega un log para el error
        res.status(500).json({ error: error.message });
    }
};

// Función para listar tareas según el rol del usuario
const listarTareas = async (req, res) => {
    try {
        const usuarioId = req.user.id; // Suponiendo que tienes el id del usuario en el token
        const rol = req.user.role; // Y el rol del usuario

        let tareas;

        if (rol === 'ADMIN') {
            // Un administrador puede ver todas las tareas
            tareas = await Tarea.findAll();
        } else {
            // Un usuario normal solo puede ver sus propias tareas
            tareas = await Tarea.findAll({
                where: { usuarioId: usuarioId }
            });
        }

        res.status(200).json(tareas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Función para actualizar una tarea
const actualizarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const { descripcion, estado } = req.body;

        const [updated] = await Tarea.update({ descripcion, estado }, {
            where: { id }
        });

        if (updated) {
            const tareaActualizada = await Tarea.findOne({ where: { id } });
            return res.status(200).json(tareaActualizada);
        }

        throw new Error('Tarea no encontrada');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Función para eliminar una tarea
const eliminarTarea = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Tarea.destroy({
            where: { id }
        });

        if (deleted) {
            return res.status(204).send();
        }

        throw new Error('Tarea no encontrada');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Exportamos las funciones para que puedan ser utilizadas en las rutas
module.exports = { crearTarea, listarTareas, actualizarTarea, eliminarTarea };
