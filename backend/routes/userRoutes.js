const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser } = require('../middleware/validationMiddleware');

// Route to get all users
router.get('/', userController.getUsers);
// Route to get user by ID
router.get('/:id', userController.getUserById);
// Route to create a new user with validation
router.post('/', validateUser, userController.createUser);
// Route to update user by ID with validation
router.put('/:id', validateUser, userController.updateUser);

// Route to delete user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
