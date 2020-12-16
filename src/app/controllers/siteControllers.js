const course = require('../models/courses');
const util = require('../../util/mongoose.js');

class siteControllers {
    // get /home
    index(res, req, next) {
        req.render('home');
    }
    // get /search
}

module.exports = new siteControllers();
