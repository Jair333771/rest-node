const { check } = require('express-validator');
const { Router } = require('express');const router = Router();
const { validateModel } = require('../middlewares/validate-fields');
const auth = require('../controllers/auth.controller');
const validator = require('../helpers/db-validators');

router.post('/login',[
    check('email', 'The email format is invalid').isEmail(),
    check('password', 'The password is required').not().isEmpty()
],
validateModel, auth.login);

module.exports = router;
