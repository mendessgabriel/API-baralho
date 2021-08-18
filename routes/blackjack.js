const express = require('express');
const router = express.Router();

const blackjackControll = require('../controllers/blackjack-controller');

router.get('/', blackjackControll.getBaralhoBlackjack);

module.exports = router;
