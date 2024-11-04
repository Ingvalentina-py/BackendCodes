// backend/controllers/code.controller.js

const Code = require('../models/Code'); // Asegúrate de tener un modelo para los códigos ganadores

// Controlador para verificar el código
const checkCode = async (req, res) => {
    const { code } = req.body; // Obtener el código del cuerpo de la solicitud

    try {
        // Aquí debes buscar el código en la base de datos
        const foundCode = await Code.findOne({ code }); // Busca en la colección de códigos

        if (foundCode) {
            return res.status(200).json({ message: '¡Eres ganador!', data: foundCode });
        } else {
            return res.status(404).json({ message: 'No eres ganador.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al verificar el código.' });
    }
};

module.exports = {
    checkCode, // Exporta la función del controlador
};

