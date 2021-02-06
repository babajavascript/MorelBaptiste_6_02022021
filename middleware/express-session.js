const session = require('express-session')

const expressSession = (session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { path: '/', httpOnly: true, secure: false, sameSite: true, maxAge: null }
}))

module.exports = expressSession;