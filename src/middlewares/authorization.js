import createHttpError from "http-errors";
import { User } from "../models/user.js";
import {Session} from "../models/session.js";


export const authorization = async (req, res, next) => {

  const { sessionId, accessToken } = req.cookies;

  if (!sessionId || !accessToken) {
    throw createHttpError(401, "Unauthorized: Missing sessionId or accessToken");
  }

  const session = await Session.findOne({_id:sessionId, accessToken});
  if (!session) {
    throw createHttpError(401, "Unauthorized: Invalid session");
  }

  const isAccessTokenExpired = session.accessTokenValidUntil < new Date();
  if (isAccessTokenExpired) {
    throw createHttpError(401, "Unauthorized: Invalid accessToken");
  }

  const user = await User.findById(session.userId);

  if(!user) {
    throw createHttpError(401, "Unauthorized: User not found");
  }

  req.user = user;

  next();
}


export const optionalAuthorization = async (req, res, next) => {
  const { sessionId, accessToken } = req.cookies;

  if (!sessionId || !accessToken) return next();

  const session = await Session.findOne({ _id: sessionId, accessToken });

  const isAccessTokenExpired = !session || session.accessTokenValidUntil < new Date();

  if (isAccessTokenExpired) return next();

  const user = await User.findById(session.userId);

  if (user) req.user = user;

  next();
};