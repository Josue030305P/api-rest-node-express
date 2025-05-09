import app from './app.js';

// Tenemos un script que permite ejecutar el servidor:
// npm run dev
app.listen(3000, () => {
  console.log('Servidor iniciado correctamemte en : http://localhost:3000');
});