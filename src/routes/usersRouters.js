import { Router } from "express";
import { users as ctrl } from "../controllers/index.js";
import { authorization } from "../middlewares/authorization.js";

const usersRouter = Router();

usersRouter.get("/api/users", authorization, ctrl.getCurrentUser);
usersRouter.patch("/api/users", authorization, ctrl.updateCurrentUser);

export default usersRouter;
