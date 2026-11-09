import bcrypt from "bcrypt";
import createHttpError from "http-errors";
import { User } from "../../models/user.js";
import { createSession } from "../../services/auth/createSession.js";
import { setSessionCookies } from "../../utils/setSessionCookies.js";

export const registerUser = async (req, res) => {
  const { name, email, tel, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw createHttpError(400, "Email in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, tel, password: hashedPassword });

  const session = await createSession(user._id);
  setSessionCookies(res, session);

  res.status(201).json(user);
};