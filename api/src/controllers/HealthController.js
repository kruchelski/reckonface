import { dbConnection } from '../config/index.js';

const checkHealth = async (req, res) => {
  let statusCode = 200;
  const status = {};
  try {
    status.server = '[Health Check] Server is up an running! 😊';
    const pg = dbConnection();
    const selectResult = await pg.select('*').from('users');
    console.log('Test connection with DB', selectResult);
    status.database = '[Health Check] Database is connected and working 😊';
  } catch (err) {
    statusCode = 500;
    const msg = err.message || err.error || 'Unexpected Error with Server/Database';
    console.log(msg);
    if (!status.server) status.server = '[Health Check] Server is down and sad 😢';
    if (!status.database) status.database = '[Health Check] Database is not connected and is alone 😢';
  } finally {
    console.log(status);
    res.status(500);
    res.json(status);
  }
};

export { checkHealth };
