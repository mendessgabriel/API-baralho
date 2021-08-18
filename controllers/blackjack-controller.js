const carta = require("../support/cartas/carta");
const messages = require("../support/messages.json");
const common = require('../support/common/common.js');

/**
 * Retorna um baralho de blackjack
 */
exports.getBaralhoBlackjack = (req, res, next) => {
    try {
        let cartas = [];

        for (var i = 0; i < 4; i++) {
            let naipe = common.setNaipe(i);
            for (var l = 1; l < 14; l++) {
                let novacarta;

                if (l === 1) {
                    novacarta = new carta('A', naipe, 1);
                } else if (l === 11) {
                    novacarta = new carta('J', naipe, 10);
                } else if (l === 12) {
                    novacarta = new carta('Q', naipe, 10);
                } else if (l === 13) {
                    novacarta = new carta('k', naipe, 10);
                } else {
                    novacarta = new carta(l.toString(), naipe, l);
                }

                cartas.push(novacarta);
            }
        }

        console.log('getBaralhoBlackjack - ' + common.geraData() + ' - Status: 200 - Qtd Cartas: ' + cartas.length);

        return res.status(200).send({ response: cartas, message: messages.userExists });

    } catch (err) {
        console.log('getBaralhoBlackjack - ' + common.geraData() + ' - Status: 500;');

        res.status(500).send({ response: null, message: err });
    }
}