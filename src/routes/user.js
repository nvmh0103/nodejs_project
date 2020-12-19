const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/userControllers');

router.get('/stored/courses', userController.storedCourses);
router.get('/trash/courses', userController.trashCourses);

module.exports = router;