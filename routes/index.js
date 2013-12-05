
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.ejs', { title: 'Leclado' });
};

exports.geo = function(req, res){
    res.render('geolocation.ejs');
};
exports.onsuccess = function(req,res){
    res.render('onsuccess.ejs');
};

exports.database = function(req, res){
	res.render('database.php');
}