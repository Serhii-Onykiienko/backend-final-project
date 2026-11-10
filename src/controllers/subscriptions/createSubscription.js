import createHttpError from 'http-errors';
import { Subscription } from '../../models/subscription.js';

export const createSubscription = async (req, res, next) => {
  try {
    const { email } = req.body;

    const existingSub = await Subscription.findOne({ email }).lean();
    if (existingSub) {
      throw createHttpError(409, 'Email already subscribed');
          }

    const newSubscription = await Subscription.create({ email });

    res.status(201).json({
      status: 201,
      message: 'Successfully subscribed',
      data: newSubscription,
    });
  } catch (error) {
    next(error);
  }
};