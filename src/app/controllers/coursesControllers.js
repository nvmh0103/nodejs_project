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
            .then(() => res.redirect(`/user/stored/courses`))
            .catch((error) => {});
    }
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((Course) => {
                res.render('courses/edit', {
                    Course: util.objectToObject(Course),
                });
            })
            .catch(next);
    }
    // PUT
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/user/stored/courses'))
            .catch(next);
    }
    // Soft delete
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // force delete
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // handle form action

    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'invalid' });
        }
    }

    handleRecycleActions(req, res, next) {
        switch (req.body.action) {
            case 'restore':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'force-delete':
                for (var i = 0; i < req.body.courseIds.length; i++) {
                    Course.deleteOne({ _id: req.body.courseIds[i] })
                        .then(() => res.redirect('back'))
                        .catch(next);
                }
                break;

            default:
                res.json({ message: 'invalid' });
        }
    }
}

module.exports = new courseControllers();
