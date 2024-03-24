var express = require('express');
var router = express.Router();
var controller=require("../controllers/userController");
/* GET users listing. */
// router.route("/").get(controller.getUser);
router.route('/')
  .get(controller.handelForm)
  .post(controller.handelPost);
module.exports = router;
