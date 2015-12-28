var config = require('./config');
/**
 * Module dependencies
 */
var path = require('path')
    , express = require('express')
    , moment = require('moment')
    , session = require('express-session')
    , MongoStore = require('connect-mongo')(session)
    , bodyParser = require('body-parser')
    , router = require('./router');

// assets
var assets = {};
//静态文件目录

var urlinfo = require('url').parse(config.host);
config.hostname = urlinfo.hostname || config.host;

var app = express();
var staticDir = path.join(__dirname, 'dist');
app.set('/views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.set('x-powered-by', false);
app.use('/' + config.app + '/dist', express.static(staticDir, {maxAge: '3d'}));

//显示请求运行时间
app.use(require('response-time')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('cookie-parser')(config.session_secret));
app.use(session({
    secret: config.session_secret,
    //store: new MongoStore({
    //    url: config.db
    // }),
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60}
}));

//资源公共数据提供
app.locals.config = config;
app.locals.app = config.app;

//判断是否是特定访问
app.use(function (req, res, next) {
    //console.log(' ip: ' + req.headers['x-forwarded-for'] + " agent: " + req.headers['user-agent']);
    //app.locals({});
    var microMessenger = req.headers['user-agent'].indexOf("MicroMessenger");
    if (microMessenger > 1) {
        app.locals.isWx = true;
    } else {
        app.locals.isWx = false;
    }
    app.locals.openid = req.session.openid;
    next();
});

// error handler
if (config.debug) {

} else {
    app.set('view cache', true);
    app.use(function (err, req, res, next) {
        return res.status(500).send('500 status');
    });
}

app.use('/', router);

app.listen(config.port, function () {
    console.log("NodeWap listening on port " + config.port +" "+ app.settings.env + " " + moment().unix());
    console.log("You can debug your app with http://" + config.hostname + ':' + config.port);
});

module.exports = app;
