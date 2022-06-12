const router = require('express').Router();
const {
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getUser)
    .post();

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .post(createUser)
    .delete(deleteUser);

router
    .route()

module.exports = router;