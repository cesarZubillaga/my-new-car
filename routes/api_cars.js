var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cars', function(req, res, next){
  req.db.get().collection('links').find({}).toArray(function(err,docs){
    if(err){
      console.log(err);
    }else{
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.send(JSON.stringify(docs));
    }
  });
});

router.post('/cars',function(req,res,next){
  var car = {
    _id: new Date(),
    name: 'asldkfa lka dsf',
    price: 123,
    link: req.body.link,
    observation: req.body.observation
  };
  req.db.get().collection('links').insertOne(car,function(err, result){
    //console.log('result', result[0]);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(JSON.stringify(car));
  });

});

module.exports = router;
