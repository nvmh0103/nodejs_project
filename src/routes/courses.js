const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/coursesControllers');


router.delete('/:id',courseController.delete);
router.delete('/:id/force',courseController.forceDelete);
router.put('/:id',courseController.update);
router.get('/:id/edit',courseController.edit);
router.patch('/:id/restore',courseController.restore);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);
router.get('/', courseController.home);

module.exports = router;
