var express = require('express');
var app = express();


app.use('/quizapp', express.static('quizappui/build'));


app.listen(8080,'localhost');


