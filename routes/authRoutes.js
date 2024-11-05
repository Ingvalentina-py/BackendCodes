const express = require('express');
const { registerUser, loginUser, registerAdmin, loginAdmin } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/admin/register', registerAdmin); // Nueva ruta para registrar admin
router.post('/admin/login', loginAdmin); // Nueva ruta para login admin

module.exports = router;
