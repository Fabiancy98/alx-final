const { Router } = require('express');
const { auth, localVariables } = require('../middleware/auth');
const User = require('../models/users');
const userController = require('../controllers/userControllers');
const router = Router();

router.get('/', userController.home_get);
router.get('/find/:username', auth, userController.findUser);
router.post('/signup', userController.signup_post);
router.post('/login', userController.login_post);
router.post('/logout', auth, userController.logoutall_post);
router.post('/authenticate', userController.verify_user, (req, res) =>
  res.end()
);
router.patch('/reset/:username', userController.reset_password);
router.patch('/user/:username', auth, userController.user_patch_customer);
router.delete('/delete/:username', auth, userController.delete_user);

router.post(
  '/generate-otp',
  userController.verify_user,
  localVariables,
  userController.gen
);
router.post('/verify-otp', userController.verify_user, userController.verify);

module.exports = router;
