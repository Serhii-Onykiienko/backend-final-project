import createHttpError from 'http-errors';

export const authorization = (req, res, next) => {
  const userRole = req.user.role; 
}