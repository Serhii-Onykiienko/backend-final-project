import bcrypt from "bcrypt";
import { User } from "../../models/user.js";

export const loginUser = async (req, res, next) => {
  try {
    const { phone, password } = req.body;

    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    let isValidPassword = false;
    
    if (user.password.startsWith("$2b$")) {
      isValidPassword = await bcrypt.compare(password, user.password);
    } else {
      isValidPassword = password === user.password;
    }

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: "Login OK" });
  } catch (error) {
    next(error);
  }
};