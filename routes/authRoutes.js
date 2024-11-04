const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Importa ambos controladores
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser); // Ahora loginUser está definido

module.exports = router;

