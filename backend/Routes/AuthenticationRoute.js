const {Signup, Login} = require("../controllers/Authentication");
const { isLoggedIn } = require("../middlewares/Authentication");
const router = require("express").Router();

router.post("/signup",Signup);
router.post("/login",Login);
router.post("/",isLoggedIn);

module.exports = router;