import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
  return `Bearer ${jwt.sign(user, process.env.TOKEN_SECRET)}`;
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.TOKEN_SECRET);
};

export { generateToken, verifyToken };
