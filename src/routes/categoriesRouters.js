import { Router } from "express";
import { categories as ctrl } from "../controllers/index.js";
import { celebrate } from "celebrate";
import { getCategoriesSchema } from "../validations/categoriesValidation.js";

const categoriesRouter = Router();

categoriesRouter.get(
  "/api/categories",
  celebrate(getCategoriesSchema),
  ctrl.getCategories,
);

export default categoriesRouter;
