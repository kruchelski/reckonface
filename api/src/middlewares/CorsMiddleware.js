import * as dotenv from 'dotenv';

dotenv.config();

const frontEndUrl = process.env.FRONT_END_URL || 'http://localhost:3000';

const CorsMiddleware = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', frontEndUrl);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS, HEAD');
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
};

export default CorsMiddleware;
