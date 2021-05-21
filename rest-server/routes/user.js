const { check } = require('express-validator');
const { Router } = require('express');
const { validateModel } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const user = require('../controllers/user.controller');
const validator = require('../helpers/db-validators');
const router = Router();

router.get('/', user.getUsers);

router.get('/', user.getUserById);

router.put('/:id', [
    check('id', 'Is not a valid id, please verify your data').isMongoId(),
    check('id').custom(validator.validateUserExist),
    check('role').custom(validator.validateRole)
],
validateModel, // Required for any check validation
user.updateUser);

router.post('/', [
    check('name', 'The name is not valid.').not().isEmpty(),
    check('email', 'The email is not valid.').custom(validator.validateEmailExist).isEmail(),
    check('password', 'The password is not valid.').isLength({ min: 4 }),
    check('role').custom(validator.validateRole)
],
validateModel, // Required for any check validation
user.createUser);

router.delete('/:id', [
    validateJWT,
    check('id', 'Is not a valid id, please verify your data').isMongoId(),
    check('id').custom(validator.validateUserExist),
],
validateModel,
user.deleteUser);

module.exports = router;
