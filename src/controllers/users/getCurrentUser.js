//? Отримати користувача

import createHttpError from "http-errors";
import { User } from "../../models/user.js";

export const getCurrentUser = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findById(_id).select("-password");
  if (!user) {
    throw createHttpError(404, "User not found");
  }

  res.status(200).json({ user });
};
