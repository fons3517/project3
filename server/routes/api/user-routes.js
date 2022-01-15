const router = require("express").Router();
const {
  createUser,
  getSingleUser,
  login,
  addTrail,
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createUser).put(addTrail);

router.route("/login").post(login);

router.route("/me").get(getSingleUser);

module.exports = router;
