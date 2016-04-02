var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cars', function(req, res, next){
  req.db.get().collection('links').find({}).toArray(function(err,docs){
    console.log((docs.length));
    if(err){
      console.log(err);
    }else{
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.send(JSON.stringify(docs));
    }
  });
});

router.post('/',function(req,res,next){
  console.log(req);
});

module.exports = router;
