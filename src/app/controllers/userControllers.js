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
    // trash courses
    trashCourses(req,res,next){
        Course.findDeleted({})
            .then(Courses=>{
                res.render('user/trashCourses',{Courses:util.arrayToObject(Courses)});
            })
            .catch(next);
    }
}

module.exports = new userControllers();