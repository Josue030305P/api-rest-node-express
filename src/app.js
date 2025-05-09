// Ecmascript module - Habilitar desde package.json
import express from 'express';
import softwaresRoutes from './routes/softwares.routes.js';

const app = express();

app.use(express.json()); // Parser JSON
app.use('/api/', softwaresRoutes); //Endpoint de la API



export default app; // Exportamos la aplicación para usarla en otros módulos