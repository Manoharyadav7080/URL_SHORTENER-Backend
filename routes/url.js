const express = require('express');
const { handleGenareteNewShortURL , handleGetAnalytics } = require('../controllers/url');
// const {handleGetAnalytics} = require("../controllers/url");

const router = express.Router();

router.post("/" , handleGenareteNewShortURL);

router.get("/analytics/:shortId" , handleGetAnalytics)


module.exports = router;
