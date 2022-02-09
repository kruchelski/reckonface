import { Server } from './src/config/index.js';
import routes from './src/routes/index.js';

const server = new Server();

routes.forEach((routeObject) => {
  server.registerRoute(routeObject.route, routeObject.router);
});

server.init();

/**
 * Rotas provávelis
 *
 * / --> GET: App is working
 * /signin --> POST: succces/fail
 * /register --> POST: user
 * /profile/:userId --> GET: user
 * /image --> PUT: user
 * /image --> GET: info about face detected
 */
