import { Router } from "express";
import { celebrate } from "celebrate";
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from "../validations/authValidation.js";

import { auth as ctrl } from "../controllers/index.js";

const authRouter = Router();

authRouter.post(
  "/api/auth/register",
  celebrate(registerUserSchema),
  ctrl.registerUser,
);
authRouter.post("/api/auth/login", celebrate(loginUserSchema), ctrl.loginUser);

authRouter.post("/api/auth/logout", ctrl.logoutUser);

authRouter.post("/api/auth/refresh", ctrl.refreshUserSession);

authRouter.post("/api/auth/request-reset-email", celebrate(requestResetEmailSchema), ctrl.requestResetEmail);

authRouter.post("/api/auth/reset-password", celebrate(resetPasswordSchema), ctrl.resetPassword);

export default authRouter;
