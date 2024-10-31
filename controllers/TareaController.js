import Tarea from '../models/Tarea.js'; 
import User from '../models/User.js'; 

const TareaController = {
  
  // Crear una tarea
  async createTarea(req, res) {
    try {
      const { description, assignedToId } = req.body;
      const createdById = req.user.id; 

      const tarea = await Tarea.create({
        description,
        createdById,
        assignedToId
      });

      res.status(201).json(tarea);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la tarea', error });
    }
  },

  // Listar todas las tareas
  async listTareas(req, res) {
    try {
      const tareas = await Tarea.findAll({
        include: [
          { model: User, as: 'createdBy', attributes: ['username'] },
          { model: User, as: 'assignedTo', attributes: ['username'] }
        ]
      });

      res.status(200).json(tareas);
    } catch (error) {
      res.status(500).json({ message: 'Error al listar tareas', error });
    }
  },

  // Cerrar una tarea (cambiar estado a 'TERMINADO')
  async closeTarea(req, res) {
    try {
      const { id } = req.params;

      const tarea = await Tarea.findByPk(id);
      if (!tarea) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }

      tarea.status = 'TERMINADO';
      tarea.endDate = new Date();

      await tarea.save();

      res.status(200).json({ message: 'Tarea cerrada exitosamente', tarea });
    } catch (error) {
      res.status(500).json({ message: 'Error al cerrar la tarea', error });
    }
  }
};

export default TareaController;
