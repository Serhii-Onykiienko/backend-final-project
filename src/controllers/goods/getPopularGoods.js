import { Good } from "../../models/good.js";

export const getPopularGoods = async (req, res) => {
  const { limit } = req.query;

  const goods = await Good.aggregate([
    {
      $lookup: {
        from: "feedbacks",
        localField: "_id",
        foreignField: "productId",
        as: "reviews",
      },
    },
    {
      $addFields: {
        rating: {
          $ifNull: [{ $round: [{ $avg: "$reviews.rate" }, 1] }, 0],
        },
        reviewsCount: { $size: "$reviews" },
      },
    },
    { $project: { reviews: 0 } },
    { $sort: { rating: -1, reviewsCount: -1, _id: 1 } },
    { $limit: limit },
  ]);

  res.status(200).json({
    status: 200,
    message: "Successfully found popular goods!",
    data: { goods },
  });
};