const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');
const cors = require("./middleware/cors");
require('dotenv').config();
const expressSession = require('../backend/middleware/express-session')
const limiter = require("./middleware/express-limit");

const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');


mongoose.connect(process.env.MONGODB_URI,
    {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(cors);

app.use(bodyParser.json());
app.use(helmet());
app.use(expressSession);
app.use("/api/auth", limiter);

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use("/api/sauces", sauceRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;





