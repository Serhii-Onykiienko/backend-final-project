
import { Feedback } from "../../models/feedback.js";

export const addRatings = async goods => {
  const ids = goods.map(good => good._id);

  const stats = await Feedback.aggregate([
    { $match: { productId: { $in: ids } } },
    {
      $group: {
        _id: "$productId",
        rating: { $avg: "$rate" },
        reviewsCount: { $sum: 1 },
      },
    },
  ]);

  const statsById = new Map(stats.map(stat => [String(stat._id), stat]));

  return goods.map(good => {
    const stat = statsById.get(String(good._id));

    return {
      ...good,
      rating: stat ? Math.round(stat.rating * 10) / 10 : 5,
      reviewsCount: stat?.reviewsCount ?? 0,
    };
  });
};