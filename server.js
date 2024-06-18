const express = require('express');
const { color } = require('./lib/color.js');
const path = require('path');

const app = express();

// Setting
app.set('PORT', process.env.PORT || 1224 || 5000 || 3000);

// Middlewares
app.enable('trust proxy');
app.set("json spaces", 2);

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Routers
const mainrouter = require('./router/main.js');
const apirouter = require('./router/api.js');
app.use('/', mainrouter);
app.use('/api', apirouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Starting the server
app.listen(app.get('PORT'), () => {
  console.log(color(`Server on port ${app.get('PORT')}`, 'green'));
});

module.exports = app;
