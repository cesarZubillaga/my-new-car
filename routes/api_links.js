var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  req.db.get().collection('links').find({}).toArray(function(err,docs){
    console.log((docs.length));
    if(err){
      console.log(err);
    }else{
      console.log(docs);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(docs));
    }
  });
});

res.post('/',function(req,res,next){
  console.log(req);
});

module.exports = router;
