const express = require('express');
const router = express.Router();
const user = require('./user');
const {logger} = require("../utils/logger");

router.get('/', (req, res)=>{
    // logger.info(process.env.NODE_ENV);
    return res.json({"route":"/"})
})
router.use("/user", user);


module.exports = router;