
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Leclado' });
};

exports.geo = function(req, res){
    res.render('geolocation');
};
exports.onsuccess = function(req,res){
    res.render('onsuccess');
};