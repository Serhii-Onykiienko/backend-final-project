import { Router } from "express";
import { users as ctrl } from "../controllers/index.js";
import { authorization } from "../middlewares/authorization.js";
import { updateUserSchema} from "../validations/usersValidation.js";
import { celebrate } from "celebrate";

const usersRouter = Router();

usersRouter.get("/api/users", authorization, ctrl.getCurrentUser);
usersRouter.patch("/api/users", authorization,celebrate(updateUserSchema), ctrl.updateCurrentUser);

export default usersRouter;
