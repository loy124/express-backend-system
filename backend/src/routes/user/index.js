const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    return res.json({"route":"/user"})
});

module.exports = router;