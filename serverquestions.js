#!/usr/bin/env nodejs
var express = require('express');
var cors = require('cors');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: '****',
    password: '****',
    database: '****'
});

connection.connect(function(error) {
    if(!!error){
        console.log('Error connecting to database');
    }else {
        console.log('Connected to database');
    }
});

app.use(cors());

app.get('/api/questions',function(req,res,next) {
    connection.query("SELECT questions.ID, questions.question FROM questions ", 
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

app.listen(8082,'localhost');
