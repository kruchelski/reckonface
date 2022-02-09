const signIn = async (req, res) => {
  const { email, password } = req.body;
  res.json({ email, password });
};

const register = async (req, res) => {
  const { username, email, password } = req.body;
  res.json({ username, email, password });
};

export { signIn, register };
