var express = require('express');
var router = express.Router();
var axios = require('axios');
import env from '../config/env'

router.get('/', function(req, res, next) {
  axios.get(env.openWeatherMapAPI+"?q=fukuyama,JP&APPID="+env.APIKey)
  .then((data)=>{
    console.log(data.data)
      res.json({data:data.data})
  })
});


module.exports = router;