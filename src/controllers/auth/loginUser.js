import bcrypt from "bcrypt";
import { User } from "../../models/user.js";
import { setSessionCookies } from "../../utils/setSessionCookies.js";
import { createSession } from "../../utils/session.js";

export const loginUser = async (req, res) => {
    const { tel, password } = req.body;

    const user = await User.findOne({ tel });
    if (!user) {
      return res.status(401).json({ message: 'Invalid phone number.' });
    }
    
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password.'})
  }

  const session = await createSession(user._id);
  setSessionCookies(res, session);
  
  return res.status(200).json({
    message: 'Login successful.',
    user: { id: user._id, phone: user.tel }
  });

};