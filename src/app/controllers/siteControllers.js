const course = require('../models/courses');
const util = require('../../util/mongoose.js');

class siteControllers {
    // get /home
    index(req, res, next) {
        course
            .find({})
            .then((courses) => {
                courses = util.arrayToObject(courses);
                // courses=courses.map(course=>course.toObject());
                res.render('home', { courses });
            })
            .catch(next);
        // res.render('home');
    }
    // get /search
}

module.exports = new siteControllers();
