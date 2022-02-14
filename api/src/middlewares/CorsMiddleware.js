const CorsMiddleware = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS, HEAD');
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
};

export default CorsMiddleware;
