import { User } from "../models/User.js";

export const updateCurrentUser = async (req, res) => {
  try {
    const userId = req.user.id; 
    const { name, surname, tel, city, postOffice } = req.body;

    if (tel) {
      const existingUserByTel = await User.findOne({ 
        tel, 
        _id: { $ne: userId } 
      });

      if (existingUserByTel) {
        return res.status(400).json({ 
          message: "Цей номер телефону вже використовується іншим користувачем." 
        });
      }
    }

    const updateData = {
      name,
      surname,
      tel,
      city,
      postOffice: postOffice ? Number(postOffice) : undefined,
    };

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "Користувача не знайдено" });
    }

    return res.status(200).json({
      message: "Дані успішно оновлено",
      user: updatedUser,
    });

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Такий номер телефону вже зайнятий." });
    }
    return res.status(400).json({ error: error.message });
  }
};
