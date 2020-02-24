const express = require('express');
var path = require('path');

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//Bodyparser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', require('./routes/index.js'));
app.use('/calendar', require('./routes/calendar.js'))
// app.use('/users', require('./routes/users'));

//Define PORT
const PORT = process.env.PORT || 5000;

//Start server
app.listen(PORT, console.log(`Server started on port ${PORT}`));
