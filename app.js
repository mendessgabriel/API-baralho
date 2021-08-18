const express = require('express');
const app = express();

const baralhoTruco = require('./routes/truco');
const baralhoBlackjack = require('./routes/blackjack');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, token, Accept, Authorization");
    next();
});

app.use('/truco', baralhoTruco);
app.use('/blackjack', baralhoBlackjack);

app.use((req, res, next) => {
    const err = new Error("Não econtrada");
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;