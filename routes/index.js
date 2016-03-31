var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
    //req.db.get().collection('links').insert({
    //  _id: new Date(),
    //  a : 'b'
    //});
  req.db.get().collection('links').find({}).toArray(function(err,docs){
    console.log((docs.length));
    if(err){
      console.log(err);
    }else{
      res.render('index', { title: 'Kaixo' , docs: docs});
    }
  });
});

module.exports = router;
