import { Server } from './src/config/index.js';

const server = new Server();
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
