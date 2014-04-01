
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Pomoc' });
};

exports.dashboard = function(req, res){
  res.render('dashboard', { title: 'Dashboard' });
};

exports.mobile = function(req, res){
  res.render('mobile', { title: 'Pomoc' });
};

exports.login = function(req, res){
  res.render('login', { title: 'Login' });
};