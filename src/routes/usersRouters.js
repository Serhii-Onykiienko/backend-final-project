import { Router } from "express";
import { users as ctrl } from "../controllers/index.js";

const usersRouter = Router();

usersRouter.get("/api/users", ctrl.getCurrentUser);
usersRouter.patch("/api/users", ctrl.updateCurrentUser);

export default usersRouter;
