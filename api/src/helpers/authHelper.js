import * as bcrypt from 'bcrypt';

const hashPassword = async (password) => {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (err) {
    const msg = err.message || err.error || 'Unexpected error hashing password';
    console.log(msg);
    throw err;
  }
};

const compareHash = async (hash, password) => {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (err) {
    const msg = err.message || err.error || 'Unexpected error hashing password';
    console.log(msg);
    throw err;
  }
};

export { hashPassword, compareHash };
