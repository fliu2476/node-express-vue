var express = require('express');
var router = express.Router();
//模块加载
var site = require('./controllers/site');
//基本服务名称
var serviceName = "/wx";

router.get('*', site.index);

module.exports = router;
