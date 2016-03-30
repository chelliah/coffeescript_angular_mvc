var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../public', '/assets/views/index.html'));
})

router.get('/*', function(req,res){
  res.redirect('/');
})

module.exports = router;
