import express from 'express';
import * as dotenv from 'dotenv';
import { CorsMiddleware } from '../middlewares/index.js';

dotenv.config();

const port = process.env.API_PORT || 3002;

class Server {
  constructor() {
    this.app = express();
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(CorsMiddleware);
  }

  registerRoute(route, router) {
    this.app.use(route, router);
  }

  regigsterStatic(route, staticPath) {
    this.app.use(route, express.static(staticPath));
  }

  init() {
    this.app.listen(port, () => {
      console.log(`Server is running in port ${port}`);
    });
  }
}

export default Server;
