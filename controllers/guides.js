const Heroes = require('../models/Heroes');

exports.index = (req, res) => {
  res.render('guides', {
    title: 'Guides'
  });
};