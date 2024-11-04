// backend/routes/code.routes.js

const express = require('express');
const router = express.Router();
const { checkCode } = require('../controllers/code.controller'); // Importa el controlador

// Definir la ruta para la verificación de códigos
router.post('/check', checkCode);

module.exports = router; // Exportar la configuración de las rutas

