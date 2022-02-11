const signIn = async (req, res) => {
  console.log('Opa');
  console.log(req.body);
  const { email, password } = req.body;
  res.json({ email, password, message: 'OK!' });
};

const register = async (req, res) => {
  console.log('eitaa');
  console.log(req.body);
  const { name, email, password } = req.body;
  res.json({ name, email, password, message: 'OK!' });
};

export { signIn, register };
