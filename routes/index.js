
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.ejs', { title: 'Leclado' });
}
/*
exports.geo = function(req, res){
    res.render('geolocation.ejs');
}*/
