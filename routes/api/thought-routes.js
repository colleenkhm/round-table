const router = require('express').Router();
const {
    getThoughtById,
    createThought,
    deleteThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getThought)
    .post();

router
    .route('/:id')
    .get(getThoughtById)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;