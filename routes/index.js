
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.geo = function(req, res){
    res.render('geolocation');
};