import createHttpError from "http-errors";
import { ROLES } from "../constants/roles.js";

export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== ROLES.admin) {
    throw createHttpError(403, "Access denied. Admin only");
  }

  next();
}