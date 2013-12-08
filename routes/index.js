
/*
 * GET home page.
 */

// renders index.ejs when home page is called in app.js
exports.index = function(req, res){
  res.render('index.ejs', { title: 'Leclado' });
}
