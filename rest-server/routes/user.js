const user = require('../controllers/user.controller');
const { Router } = require('express');
const router = Router();

router.get('/', user.getUsers);

router.get('/', user.getUserById);

router.put('/:id', user.updateUser);

router.post('/', user.createUser);

router.delete('/', user.deleteUser);

module.exports = router;
