import { Request, Response, NextFunction } from 'express';
import { findAllUsers } from '../services/userService';



// Read all users
export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
    findAllUsers().then(users => {
      res.json(users);
    }).catch(next);
  } catch (error) {
    next(error);
  }
};