const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.find);
router.post('/signup',itemController.post)

module.exports = router;
