const mongoose = require('mongoose');
const logger = require('../../util/winston');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        logger.info("Connected to database");
    } catch (error) {
        logger.error("Can't connect to database");
    }
}

module.exports = { connect };
