const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs : 10 * 60 * 1000, // 10 minutes 
    max: 50, // limit each IP to 10 requests per windowMs 
    message: 'Too Many Requests'
        
});

module.exports = limiter;