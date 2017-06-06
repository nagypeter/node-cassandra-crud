
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { page_title: 'Hello Container World' });

};

