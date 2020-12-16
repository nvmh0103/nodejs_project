const Course = require('../models/courses');
const util = require('../../util/mongoose');

class courseControllers {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((Course) => {
                Course = util.objectToObject(Course);
                res.render('courses/show', { Course });
            })
            .catch(next);
    }
    home(req, res, next) {
        Course.find({})
            .then((Courses) => {
                Courses = util.arrayToObject(Courses);
                // courses=courses.map(course=>course.toObject());
                res.render('courses/coursesHome', { Courses });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create');
    }
    //post /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect(`/`))
            .catch((error) => {});
    }
}

module.exports = new courseControllers();
