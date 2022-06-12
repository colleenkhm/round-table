const router = require('express').Router();
const {
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getThought)
    .post();

router
    .route('/:id')
    .get()
    .put()
    .delete

module.exports = router;