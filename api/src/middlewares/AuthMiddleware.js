import { dbConnection } from '../config/index.js';
import { TokenHelper } from '../helpers/index.js';

const AuthMiddleware = async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  try {
    const db = dbConnection();
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      throw new Error('Access token missing');
    }

    const userToken = TokenHelper.verifyToken(token);
    const users = await db('users').where({ id: userToken.id });

    if (!users || !users[0]) res.status(400).json({ error: 'User not found' });

    req.user = users[0];

    next();
  } catch (err) {
    const msg = err.message || err.error || 'Unexpected error while validating token';
    res.status(400).json({ error: msg });
  }
};

export default AuthMiddleware;
