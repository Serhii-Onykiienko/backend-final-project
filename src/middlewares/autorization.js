import createHttpError from 'http-errors';
import { ROLES } from '../constants/roles.js';
import { User } from '../models/user.js';
import {session} from '../models/session.js';


export const authorization = (req, res, next) => {
  const userRole = req.user.role; 
}