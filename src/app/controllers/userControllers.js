const Course = require('../models/courses');
const util = require('../../util/mongoose.js');

class userControllers {
    // get /home
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([Courses, deletedCount]) => {
                res.render('user/storedCourses', {
                    deletedCount,
                    Courses: util.arrayToObject(Courses),
                });
            })
            .catch(next);

        // Course.countDocumentsDeleted()
        //     .then((deletedCount)=>{
        //         console.log(deletedCount);
        //     })
        //     .catch(()=>{

        //     });

        // Course.find({})
        //     .then(Courses=>{
        //         res.render('user/storedCourses',{Courses:util.arrayToObject(Courses)});
        //     })
        //     .catch(next);
    }
    // trash courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((Courses) => {
                res.render('user/trashCourses', {
                    Courses: util.arrayToObject(Courses),
                });
            })
            .catch(next);
    }
}

module.exports = new userControllers();
