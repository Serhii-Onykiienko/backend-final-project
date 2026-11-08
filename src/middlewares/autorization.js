import createHttpError from 'http-errors';
import { ROLES } from '../constants/roles.js';
import { User } from '../models/user.js';
import {Session} from '../models/session.js';



export const authorization = async (req, res, next) => {
  // const userRole = req.user.role; 
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

  const user = await User.findById(session.userId);

  if(!user) {
    throw createHttpError(401, 'Unauthorized: User not found');
  }
  // перевірка current ролі користувача яка зараз встановлена в базі даних
    if (user.role === ROLES.admin) {
        req.user.role = ROLES.admin;
    }  
    
    next();
}