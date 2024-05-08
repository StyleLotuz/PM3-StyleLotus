import { Request, Response, NextFunction } from 'express';
export const validateUserData = (req: Request, res:Response, next: NextFunction) => {
    const { name, email, birthdate, nDni, username, password } = req.body;
  
    if (!name || !email || !birthdate || !nDni || !username || !password) {
      return res.status(400).json({ message: 'Faltan campos obligatorios en la solicitud' });
    }
  
    next();
  };