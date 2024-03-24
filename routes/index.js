var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');
var messages = require('../data/messages');

/* GET home page. */
router.get('/', controller.renderIndex);

module.exports = router;
