const express = require("express")
const router = express.Router()
const userControllers = require("../controllers/userControllers")

router.post("/login", userControllers.login)
router.post("/register", userControllers.register)
router.get("/allUsers", userControllers.allUsers)
router.get("/:username", userControllers.getUser)

module.exports = router;