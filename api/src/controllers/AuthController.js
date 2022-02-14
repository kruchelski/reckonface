import { dbConnection } from '../config/index.js';
import { AuthHelper, TokenHelper } from '../helpers/index.js';

const signIn = async (req, res) => {
  const db = dbConnection();
  try {
    const { email, password } = req.body;
    const users = await db('users')
      .join('logins', 'users.email', 'logins.email')
      .select('users.id', 'users.name', 'users.email', 'users.entries', 'users.joined', 'logins.hash')
      .where({
        'users.email': email,
      });
    if (!users || !users[0]) throw new Error('No user found');
    const user = users[0];
    const canLogin = await AuthHelper.compareHash(user.hash, password);
    if (!canLogin) throw new Error('Email or password incorrect');
    delete user.hash;
    const token = TokenHelper.generateToken(user);
    res.status(200);
    res.json({ msg: 'SignIn Success!', user, token });
  } catch (err) {
    const msg = err.message || err.error || 'Unexpected error white signin';
    console.log(msg);
    res.status(400);
    res.send({ msg });
  }
};

const register = async (req, res) => {
  const db = dbConnection();
  const trx = await db.transaction();
  try {
    const { name, email, password } = req.body;
    const user = {
      name,
      email,
      joined: new Date().toISOString(),
    };
    const hash = await AuthHelper.hashPassword(password);
    const loginUser = {
      email,
      hash,
    };
    const users = await trx('users').returning('*').insert(user);
    await trx('logins').insert(loginUser);
    await trx.commit();
    const userToken = TokenHelper.generateToken(users[0]);
    res.json({ msg: 'User inserted', user: users[0], token: userToken });
  } catch (err) {
    await trx.rollback();
    const msg = err.message || err.error || 'Unexpected error while register';
    console.log(msg);
    res.status(500);
    res.send({ error: msg });
  }
};

export { signIn, register };
