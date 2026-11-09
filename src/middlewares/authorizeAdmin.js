import createHttpError from "http-errors";

export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    throw createHttpError(403, "Access denied. Admin only");
  }

  next();
}