const express = require('express');
global.app = express();
const secure = require('ssl-express-www');
const { color } = require('./lib/color.js');
const cors = require('cors');
const path = require('path');

// Setting
 app.set('PORT', process.env.PORT || 1224 || 5000 || 3000)

//router
var mainrouter = require('./router/main.js');
var apirouter = require('./router/api.js');

// middlewares 
app.enable('trust proxy');

app.set("json spaces",2)

app.use(cors())

app.use(secure)

app.use(express.static(__dirname + "/public/"))

app.use('/', mainrouter)

app.use('/api', apirouter)
// starting the server
app.listen(app.get('PORT'), () => {
	  console.log(color(`Server on port ${app.get('PORT')}`, 'green'))
})

module.exports = app

