/**
 * Retorna a data atual formatada dd/MM/yyyy
 */
exports.geraData = () => {
    var data = new Date(),
        dia = data.getDate().toString(),
        diaF = (dia.length === 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length === 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}

/**
 * Retorna um naipe para uma carta
 */
exports.setNaipe = (naipeRandom) => {
    if (naipeRandom === 0) {
        return 'paus';
    }
    else if (naipeRandom === 1) {
        return 'copas';
    }
    else if (naipeRandom === 2) {
        return 'espadas';
    }
    else {
        return 'ouros';
    }
}