//? Отримати користувача

import createHttpError from "http-errors";
import { User } from "../../models/user.js";

export const getCurrentUser = async (req, res) => {
  const { userId } = req.user;

  const user = await User.findById(userId).select("-password");
  if (!user) {
    throw createHttpError(404, "User not found");
  }

  res.status(200).json({ user });
};
