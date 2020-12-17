const course = require('../models/courses');
const util = require('../../util/mongoose.js');

class siteControllers {
    // get /home
    index(req, res, next) {
        res.render('home');
    }
    // get /search
}

module.exports = new siteControllers();
