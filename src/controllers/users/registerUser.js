import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import createHttpError from "http-errors";
import { sendEmail } from "../utils/sendEmail.js"; 

export const requestResetEmail = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(200).json({ message: "Password reset email sent successfully" });
  }

  const token = jwt.sign(
    { sub: user._id.toString(), email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "15m" },
  );
  const link = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  try {
    await sendEmail({
      from: process.env.SMTP_FROM,
      to: user.email,
      subject: "Reset your password",
      html: `<p><a href="${link}">Reset password</a> (valid for 15 minutes)</p>`,
    });
  } catch {
    throw createHttpError(500, "Failed to send the email, please try again later.");
  }

  res.status(200).json({ message: "Password reset email sent successfully" });
};

export const resetPassword = async (req, res) => {
  const { token, password } = req.body;

  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw createHttpError(401, "Invalid or expired token");
  }

  const user = await User.findOne({ _id: payload.sub, email: payload.email });
  if (!user) throw createHttpError(404, "User not found");

  const hashed = await bcrypt.hash(password, 10);
  await User.updateOne({ _id: user._id }, { password: hashed });
  await Session.deleteMany({ userId: user._id });

  res.status(200).json({ message: "Password reset successfully" });
};