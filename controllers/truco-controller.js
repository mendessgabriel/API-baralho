const carta = require("../support/cartas/carta");
const messages = require("../support/messages.json");
const common = require('../support/common/common.js');
// const mysql = require('../service/baralhoconnection').pool;
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');


/**
 * Retorna um baralho de truco
 */
exports.getBaralhoTruco = (req, res, next) => {
    try {
        let cartas = [];

        for (var i = 0; i < 4; i++) {
            let naipe = common.setNaipe(i);
            for (var l = 1; l < 11; l++) {
              let novacarta = new carta(l, naipe);
              cartas.push(novacarta);
            }
          }
        
          console.log('getBaralhoTruco - ' + common.geraData() + ' - Status: 200 - Qtd Cartas: ' + cartas.length);

        return res.status(200).send({ response: cartas, message: messages.userExists });

    } catch (err) {
        console.log('getBaralhoTruco - ' + common.geraData() + ' - Status: 500;');

        res.status(500).send({ response: null, message: err });
    }
}
