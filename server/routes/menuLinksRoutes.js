const express = require("express")
const router = express.Router()
const menuLinksControllers = require("../controllers/menuLinksControllers");

router.post("/createMenuLink", menuLinksControllers.createMenuLink)
router.get("/getAllMenuLinks", menuLinksControllers.getAllMenuLink)
router.get("/:id", menuLinksControllers.getMenuLinkById)
router.put("/:id", menuLinksControllers.updateMenuLink)
router.delete("/:id", menuLinksControllers.deleteMenuLink)


module.exports = router;