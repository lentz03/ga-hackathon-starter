const Heroes = require('../models/Heroes');


exports.index = (req, res) => {
  res.render('Heroes', {
    title: 'Heroes'
  });
};
