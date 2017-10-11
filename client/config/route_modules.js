const router = require('express').Router();

/**
 * 
 * Config de rotas do modulo
 */
const modules = {
    orderbook: require('../modules/orderbook/config/routes')
}

/**
 * 
 * Config
 * 
 * Inicializa as rotas de todos Modulo do sistema
 * 
 * @param server Referencia do servidor
 * @return Void
 * 
 * @author Rubens Neto
 */
module.exports = function routes(server) {
    server.use('/', modules.orderbook);
}