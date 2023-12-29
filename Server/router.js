const router = require("express").Router();
const webroutes = require("./Routes/web.routes");

router.use("/web", webroutes);

module.exports = router;
