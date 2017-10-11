/**
 * 
 * @param value Value em decimal para a formatação
 * @example R$ 99,999.00
 * @return String
 * 
 * @author Rubens Neto
 */
module.exports = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};