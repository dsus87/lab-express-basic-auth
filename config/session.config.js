const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = app => { 
  app.set('trust proxy', 1); 
//session.use
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 30
      },
      store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/lab-express-basic-auth" })
    })
  );
};