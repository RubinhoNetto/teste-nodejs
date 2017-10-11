/**
 * 
 * @param value Value em decimal para a formatação
 * @param decPlace Casas decimais para o truncamento
 * @param str String para concatenas no final
 * @example 0,9999 BTC
 * @return String
 * 
 * @author Rubens Neto
 */
module.exports = (value, decPlace = 4, str = ' BTC') => {
    return parseFloat(value).toFixed(decPlace) + str;
};