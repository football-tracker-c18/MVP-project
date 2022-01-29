const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.find);
router.post('/signup',itemController.post)
router.get("/login/:name/:password" , itemController.login)
router.post("/manager/team/:playname/:playnumber/:playpos",itemController.postPlayer)
router.get("/gk",itemController.gk)
router.get("/def",itemController.def)
router.get("/mid",itemController.mid)
router.get("/atk",itemController.atk)
router.delete("/delete",itemController.del)

module.exports = router;
