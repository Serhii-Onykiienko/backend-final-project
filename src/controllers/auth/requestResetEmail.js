export const requestResetEmail = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(200).json({ message: 'Password reset email sent successfully' });
  }

  const token = jwt.sign(
    { sub: user._id.toString(), email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '15m' },
  );
  const link = `${process.env.FRONTEND_DOMAIN}/reset-password?token=${token}`;

  try {
    await sendEmail({
      from: process.env.SMTP_FROM,
      to: user.email,
      subject: 'Reset your password',
      html: `<p><a href="${link}">Reset password</a> (valid for 15 minutes)</p>`,
    });
  } catch {
    throw createHttpError(500, 'Failed to send the email, please try again later.');
  }

  res.status(200).json({ message: 'Password reset email sent successfully' });
};