class searchControllers {
    // get /home
    index(req, res) {
        res.render('search');
    }
}

module.exports = new searchControllers();
