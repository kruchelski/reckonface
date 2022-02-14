import { dbConnection } from '../config/index.js';

const getUser = async (req, res) => {
  try {
    const db = dbConnection();
    const { userId } = req.params;
    const users = await db('users').where({
      id: userId,
    });
    if (!users || !users[0]) throw new Error('No user found');
    res.status(200);
    res.json(users[0]);
  } catch (err) {
    const msg = err.message || err.error || 'Unexpected error getting user';
    console.log(msg);
    res.status(500);
    res.json({ error: msg });
  }
};

const addImageCountToUser = async (req, res) => {
  const db = dbConnection();
  const trx = await db.transaction();
  try {
    const { userId } = req.params;
    const users = await db('users').returning('*').where({ id: userId }).increment('entries');
    if (!users || !users[0]) throw new Error('No user found');
    res.status(200);
    res.json({ msg: 'User entries updated', user: users[0] });
  } catch (err) {
    const msg = err.message || err.error || 'Unexpected error getting user';
    console.log(msg);
    res.status(500);
    res.json({ error: msg });
  }
};

export { getUser, addImageCountToUser };
