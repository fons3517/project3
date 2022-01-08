const jwt = require('jsonwebtoken');

// set token .env and expiration date
const secret = 'DB_PASSWORD';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return res.status(400).json({ message: 'NO Such Token Exists Here!' });
    }

    //verifying token and getting user data out
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('This Token is INVALID!!!');
      return res.status(400).json({ message: 'This is an INVALID Token' });
    }
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  emailValidation: function (email) {
    const check =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(email).toLowerCase());
  },
};



