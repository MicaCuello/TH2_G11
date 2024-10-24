// middleware/authorization.js

import jwt from 'jsonwebtoken'; // Asegúrate de tener instalado jsonwebtoken
import { ROLES } from '../models/Role.js';

// Middleware para verificar el rol del usuario
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Suponiendo que usas Bearer token
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'tu_secreto', (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }

      const userRole = decoded.role; // Asegúrate de que el rol se almacene en el token
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Forbidden: You do not have permission' });
      }

      req.user = decoded; // Guarda los datos del usuario en el request
      next(); // Permite continuar con la siguiente función middleware
    });
  };
};

export default authorizeRoles;
