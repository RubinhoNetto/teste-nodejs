const router = require('express').Router();

const orderbook = require('../modules/orderbook/config/routes');

module.exports = function routes(server) {
    server.use('/', orderbook);
}