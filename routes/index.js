const router = require("express").Router();
const UserController = require("../controllers/User");

router.get("/users", UserController.findAll);
router.get("/users/:id", UserController.findOne);
router.post("/users", UserController.insertOne);
router.put("/users/:id", UserController.findOneAndUpdate);
router.delete("/users/:id", UserController.findOneAndDelete);

module.exports = router;
