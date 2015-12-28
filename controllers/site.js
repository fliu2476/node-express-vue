var moment  = require('moment');

exports.index = function (req, res, next) {
    res.render("index", {ver: moment().unix()});
};
