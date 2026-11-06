import createHttpError from "http-errors";
import { Session } from "../../models/session.js";
import { setSessionCookies } from "../../utils/setSessionCookies.js";
import { createSession } from "../../services/auth/createSession.js";

export const refreshUserSession = async (req, res) => {
  const { sessionId, refreshToken } = req.cookies;

  if (!sessionId || !refreshToken) {
    throw createHttpError(401, "Missing session credentials");
  }

  const session = await Session.findOneAndDelete({
    _id: sessionId,
    refreshToken,
  });

  if (!session) {
    throw createHttpError(401, "Session not found");
  }

  const isValidTokenExpired = session.refreshTokenValidUntil <= new Date();

  if (isValidTokenExpired) {
    res.clearCookie("sessionId");
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    throw createHttpError(401, "Session token expired");
  }

  const newSession = await createSession(session.userId);

  setSessionCookies(res, newSession);

  res.status(200).json({
    message: "Session refreshed",
  });
};
