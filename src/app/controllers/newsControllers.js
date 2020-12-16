class newControllers {
    // get /news
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('New');
    }
}

module.exports = new newControllers();
