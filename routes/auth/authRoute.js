// 3rd Party Modules
const { Router } = require('express');
  
// Local Modules
const authController = require('../../controller/authController');
  
// Initialization
const router = Router();
  
// Requests 
router.post('/login', authController.login);
router.post('/signup', authController.signup);
  
module.exports = router;