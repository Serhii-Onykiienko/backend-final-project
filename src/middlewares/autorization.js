import createHttpError from 'http-errors';
import { ROLES } from '../constants/roles.js';
import { User } from '../models/user.js';
import {Session} from '../models/session.js';



export const authorization = async (req, res, next) => {
  const userRole = req.user.role; 
  const { sessionId, accessToken } = req.cookies;

  if (!sessionId || !accessToken) {
    throw createHttpError(401, 'Unauthorized: Missing sessionId or accessToken');
  }
   
  const session = await Session.findOne({_id:sessionId, accessToken});
  if (!session) {
    throw createHttpError(401, 'Unauthorized: Invalid session');
  } 
 
  const isAccessTokenValid = session.accessTokenValidUntil < new Date();
  if (!isAccessTokenValid) {
    throw createHttpError(401, 'Unauthorized: Invalid accessToken');
  }



    if (userRole === ROLES.admin) {
        return next();
    }  
    
    next();
}