import { registerUser } from "../controllers/auth/register.js";
import { loginUser } from "../controllers/auth/login.js";
import { logoutUser } from "../controllers/auth/logout.js";
import { refreshUserSession } from "../controllers/auth/refreshUserSession.js";
import { requestResetEmail } from "../controllers/auth/requestResetEmail.js";
import { resetPassword } from "./auth/resetPassword.js";

export const auth = {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
  requestResetEmail,
  resetPassword,
};
