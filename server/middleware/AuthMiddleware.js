const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const accessToken = authHeader && authHeader.split(' ')[1];

  if (!accessToken) {
    return res.json({ error: 'User not logged in' });
  }

  try {
    const validToken = verify(accessToken, 'bljonkajenajpametnijabljnkaikona');
    req.user = validToken;

    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err.message });
  }
};

module.exports = { validateToken };
