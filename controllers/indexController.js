const messages=require('../data/messages');
exports.renderIndex = (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
}