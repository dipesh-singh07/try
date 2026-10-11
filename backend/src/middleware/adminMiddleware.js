export const verifyAdmin = (req, res, next) => {
  if (req.user && req.user.role) {
    if (req.user.role === "admin") {
      return next();
    }
    return res.status(403).json({
      message: "Access denied. Admin only.",
    });
  }

  const roleHeader = req.headers["x-user-role"] || req.headers["role"];
  if (roleHeader) {
    if (roleHeader.toLowerCase() === "admin") {
      return next();
    }
    return res.status(403).json({
      message: "Access denied. Admin only.",
    });
  }

  const authHeader = req.headers["authorization"];
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const payloadBase64 = token.split(".")[1];
      if (payloadBase64) {
        const decoded = JSON.parse(
          Buffer.from(payloadBase64, "base64").toString()
        );
        if (decoded.role === "admin") {
          req.user = decoded;
          return next();
        }
        return res.status(403).json({
          message: "Access denied. Admin only.",
        });
      }
    } catch (e) {}
  }

  return res.status(403).json({
    message: "Access denied. Admin only.",
  });
};
