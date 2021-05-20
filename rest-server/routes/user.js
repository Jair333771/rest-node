const user = require('../controllers/user.controller');
const { check } = require('express-validator');
const { Router } = require('express');
const { validateModel } = require('../middlewares/validate-fields');
const { validateRole } = require('../helpers/db-validators');
const router = Router();

router.get('/', user.getUsers);

router.get('/', user.getUserById);

router.put('/:id', user.updateUser);

router.post('/', [
    check('name', 'The name is not valid.').not().isEmpty(),
    check('email', 'The email is not valid.').isEmail(),
    check('password', 'The password is not valid.').isLength({ min: 4 }),
    check('role').custom(validateRole)
], validateModel, user.createUser);

router.delete('/', user.deleteUser);

module.exports = router;
