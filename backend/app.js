const express = require('express');
var path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/dist');
// app.engine('html', engine.mustache);
app.set('view engine', 'ejs');
//Bodyparser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', require('./routes/index.js'));
app.use('/dashboard', require('./routes/calendar.js'))
//app.use('/users', require('./routes/users'));

//Define PORT
const PORT = process.env.PORT || 5000;

//Start server
app.listen(PORT, console.log(`Server started on port ${PORT}`));
