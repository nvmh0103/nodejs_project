const newsRouter = require('./news');
const siteRouter = require('./site');
const searchRouter = require('./search');
const courseRouter = require('./courses');
const userRouter=require('./user')

function route(app) {
    app.use('/user',userRouter);
    app.use('/courses', courseRouter);
    app.use('/search', searchRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
