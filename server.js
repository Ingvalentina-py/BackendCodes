// server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Importar la función para conectar a MongoDB
const authRoutes = require("./routes/authRoutes"); // Importar rutas de autenticación

dotenv.config(); // Cargar variables de entorno
connectDB(); // Conectar a MongoDB

const app = express();

// Middleware
app.use(cors()); // Habilitar CORS para evitar problemas de seguridad en las peticiones
app.use(express.json()); // Para parsear JSON en el cuerpo de las peticiones

// Rutas
app.use("/api/auth", authRoutes); // Ruta de autenticación

// Configuración del puerto
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
