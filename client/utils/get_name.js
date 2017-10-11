/**
 * 
 * Constante Object
 * Guarda os nomes de cada sigla de Exchanges
 */
const nameExchanges = {
    'ARN': 'Arena Bitcoin',
    'B2U': 'BitcoinToYou',
    'BAS': 'Basebit',
    'BIV': 'Bitinvest',
    'BSQ': 'Bitsquare',
    'FLW': 'flowBTC',
    'FOX': 'FoxBit',
    'LOC': 'LocalBitcoins',
    'MBT': 'Mercado Bitcoin',
    'NEG': 'Negocie Coins',
    'PAX': 'Paxful'
};

/**
 * 
 * @param value String para formatar o nome das Exchanges
 * @example NAME (NA)
 * @return String
 * 
 * @author Rubens Neto
 */
module.exports = (value) => {
    return nameExchanges[value] ? `${nameExchanges[value]} (${value})` : value;
};