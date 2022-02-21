import * as bcryptjs from 'bcryptjs';

const hashPassword = async (password) => {
  try {
    const hash = await bcryptjs.default.hash(password, 10);
    return hash;
  } catch (err) {
    const msg = err.message || err.error || 'Unexpected error hashing password';
    console.log(msg);
    throw err;
  }
};

const compareHash = async (hash, password) => {
  try {
    const result = await bcryptjs.default.compare(password, hash);
    return result;
  } catch (err) {
    const msg = err.message || err.error || 'Unexpected error hashing password';
    console.log(msg);
    throw err;
  }
};

export { hashPassword, compareHash };
