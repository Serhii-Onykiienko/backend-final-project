import bcrypt from "bcrypt";
import createHttpError from "http-errors";
import { User } from "../../models/user.js";
import { createSession } from "../../services/auth/createSession.js";
import { setSessionCookies } from "../../utils/setSessionCookies.js";

export const registerUser = async (req, res) => {
  const { name, email, tel, password } = req.body;

  if (await User.findOne({ tel })) {
    throw createHttpError(400, "Tel in use");
  }
  // скидання пароля шукає користувача за email, тому він має бути унікальним. Це при умові, що є два схожі електронні адреси, але з різними регістрами. Тому перевірка на унікальність email є обов'язковою.
  if (await User.findOne({ email })) {
    throw createHttpError(400, "Email in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    tel,
    password: hashedPassword,
  });

  const session = await createSession(user._id);
  setSessionCookies(res, session);

  res.status(201).json(user);
};
