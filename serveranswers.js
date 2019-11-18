#!/usr/bin/env nodejs
var express = require('express');
var cors = require('cors');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'quizclient',
    password: 'quizauth',
    database: 'quizquestionsdb'
});

connection.connect(function(error) {
    if(!!error){
        console.log('Error with serveranswers connecting to database');
    }else {
        console.log('Serveranswers connected to database');
    }
});

app.use(cors());

app.get('/answers',function(req,res,next) {
    connection.query("SELECT answers.QID, answers.answer, answers.correct FROM answers ", 
    function(error,results,fields) {
        if(!!error){
            console.log('Error in the query');
        }else {
            console.log('Query successful');
            res.send(results);
            console.log(results);
        }
        
    });
})

app.listen(8081,'localhost');
