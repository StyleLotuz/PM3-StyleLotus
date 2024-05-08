import { Response, Request, NextFunction } from 'express';
import {  } from 'express';
export const validateAppointmentData = (req: Request, res: Response, next: NextFunction) => {
    const { date, time, userID } = req.body;
  
    if (!date || !time || !userID) {
      return res.status(400).json({ message: 'Faltan campos obligatorios en la solicitud' });
    }
  
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!date.match(dateRegex)) {
      return res.status(400).json({ message: 'El formato de la fecha es incorrecto. Debe ser YYYY-MM-DD' });
    }
  
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!time.match(timeRegex)) {
      return res.status(400).json({ message: 'El formato de la hora es incorrecto. Debe ser HH:MM' });
    }
  
    next();
  };