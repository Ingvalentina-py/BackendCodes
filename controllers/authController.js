const User = require('../models/User');

// Función para registrar un nuevo usuario
const registerUser = async (req, res) => {
    const { name, lastName, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuario ya existe' });
        }

        const newUser = new User({ name, lastName, email, password });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }
};

// Función para el login de usuario
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        res.status(200).json({
            message: 'Login exitoso',
            user: { name: user.name, lastName: user.lastName, email: user.email },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

// Agregar las funciones de registro y login para admin
const registerAdmin = async (req, res) => {
    const { name, lastName, email, password } = req.body;

    try {
        const existingAdmin = await User.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin ya existe' });
        }

        const newAdmin = new User({ name, lastName, email, password });
        await newAdmin.save();
        res.status(201).json({ message: 'Admin registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el admin' });
    }
};

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await User.findOne({ email });
        if (!admin || admin.role !== 'admin') { // Asegurarse de que sea admin
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        if (admin.password !== password) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        res.status(200).json({
            message: 'Login admin exitoso',
            admin: { name: admin.name, lastName: admin.lastName, email: admin.email },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión como admin' });
    }
};

module.exports = { registerUser, loginUser, registerAdmin, loginAdmin };

