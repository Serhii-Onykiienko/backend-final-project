import { registerUser } from "./auth/registerUser.js";
import { loginUser } from "./auth/loginUser.js";
import { logoutUser } from "./auth/logoutUser.js";
import { refreshUserSession } from "./auth/refreshUserSession.js";
import { requestResetEmail } from "./auth/requestResetEmail.js";
import { resetPassword } from "./auth/resetPassword.js";

import { getCategories } from "./categories/getCategories.js";

import { createFeedback } from "./feedbacks/createFeedback.js";
import { getFeedbacks } from "./feedbacks/getFeedbacks.js";

import { getGoods } from "./goods/getGoods.js";
import { getGoodById } from "./goods/getGoodById.js";

import { createOrder } from "./orders/createOrder.js";
import { getOrders } from "./orders/getOrders.js";
import { updateOrderStatus } from "./orders/updateOrderStatus.js";

import { createSubscription } from "./subscriptions/createSubscription.js";

import { getCurrentUser } from "./users/getCurrentUser.js";
import { updateCurrentUser } from "./users/updateCurrentUser.js";

export const auth = {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserSession,
  requestResetEmail,
  resetPassword,
};

export const categories = { getCategories };

export const feedbacks = { createFeedback, getFeedbacks };

export const goods = {
  getGoods,
  getGoodById,
};

export const orders = {
  createOrder,
  getOrders,
  updateOrderStatus,
};

export const subscriptions = {
  createSubscription,
};

export const users = {
  getCurrentUser,
  updateCurrentUser,
};
