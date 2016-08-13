var express = require('express'),
    app = new express(),
    multer = require('multer'),
    upload= multer({dest: './uploads'}),
    path = require('path'),
    bodyparser=require('body-parser');
    
    app.use(bodyparser.json());
    
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname+'/index.html'));
    });
    
    app.post('/', upload.single('file'), function(req, res, next){
        console.log(req.file.size);
        res.json(req.file.size);
        res.end();
    });
    
    app.listen(8080, function(){
        console.log('listenning on port 8080!!!');
    })