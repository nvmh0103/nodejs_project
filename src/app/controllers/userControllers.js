const Course = require('../models/courses');
const util = require('../../util/mongoose.js');

class userControllers {
    // get /home
    storedCourses(req, res, next) {
        Course.find({})
            .then(Courses=>{
                res.render('user/storedCourses',{Courses:util.arrayToObject(Courses)});
            })
            .catch(next);
    }
    // get /search
}

module.exports = new userControllers();