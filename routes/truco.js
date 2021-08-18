const express = require('express');
const router = express.Router();

const trucoControll = require('../controllers/truco-controller');

router.get('/', trucoControll.getBaralhoTruco);

module.exports = router;
