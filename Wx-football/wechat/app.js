var express = require('express')

var app = express()

app.get('/api/list',function(req,res){
	res.json({"code":0,data:[ {"src":"../../images/index/index0_2.png","tip":"BOOM SHAKA LAKA"},
      {"src":"../../images/index/index0_2.png","tip":"BOOM SHAKA LAKA"},
      {"src":"../../images/index/index0_2.png","tip":"BOOM SHAKA LAKA"},
      {"src":"../../images/index/index0_2.png","tip":"BOOM SHAKA LAKA"},
      {"src":"../../images/index/index0_2.png","tip":"BOOM SHAKA LAKA"}]})
})

app.listen('8080')