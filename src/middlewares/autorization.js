import createHttpError from 'http-errors';
import { User } from '../models/user.js';
import {Session} from '../models/session.js';



export const authorization = async (req, res, next) => {
  
  const { sessionId, accessToken } = req.cookies;

  if (!sessionId || !accessToken) {
    throw createHttpError(401, 'Unauthorized: Missing sessionId or accessToken');
  }
   
  const session = await Session.findOne({_id:sessionId, accessToken});
  if (!session) {
    throw createHttpError(401, 'Unauthorized: Invalid session');
  } 
 
  const isAccessTokenValid = session.accessTokenValidUntil < new Date();
  if (isAccessTokenValid) {
    throw createHttpError(401, 'Unauthorized: Invalid accessToken');
  }

  const user = await User.findById(session.userId);

  if(!user) {
    throw createHttpError(401, 'Unauthorized: User not found');
  }

  req.user = user;

    next();
}

