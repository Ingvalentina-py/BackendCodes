// config/db.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Cargar variables de entorno
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB conectado");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1); // Salir del proceso si no se puede conectar
    }
};

module.exports = connectDB;

