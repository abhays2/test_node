const express = require("express");
const router = express.Router();

const emailController = require("./controller/emailController");

router.route("/emailList").get(emailController.fetchAllEmail);
router.route("/addemail").post(emailController.addNewEmail);
router.route("/emailList/:id").get(emailController.fetchById);
router.route("/emailList/:id").put(emailController.updateById);
router.route("/emailList/:id").delete(emailController.deleteById);
router.route("*").all((req, res) => {
  res.sendStatus(404);
});

module.exports = router;
