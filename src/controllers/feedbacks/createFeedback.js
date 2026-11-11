//? Створити Feedback

import { Category } from "../../models/category.js";
import { Feedback } from "../../models/feedback.js";
import { Good } from "../../models/good.js";

export const createFeedback = async (req, res) => {
    const{productId}=req.body;
    const good = await Good.findById(productId);
    if(!good){
        return res.status(404).json({message: "Product not found"})
    }
    const category = await Category.findById(good.category)
    const feedback = await Feedback.create({...req.body, date: new Date().toISOString().slice(0,10), category: category.name})
    res.status(201).json(feedback)
};
