const Heroes = require('../models/Heroes');

exports.index = (req, res) => {
  res.render('guides', {
    title: 'Guides'
  });
};


// GET HERO FROM DATABASE
function getHeroes(request, response) {
  var name = request.params.name;

  Candy.findById({_name: name}, function(error, candy) {
    if(error) response.json({message: 'Could not find hero b/c:' + error});

    response.json({candy: candy});
  });
}