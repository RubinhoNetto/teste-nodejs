const router = require('express').Router();

/**
 * 
 * Config de rotas da das controllers
 */
const controllers ={
    orderbook: require('../controllers/orderbook'), 
} 

// Rota
router.get('/', controllers.orderbook.filter);
router.get('/:type', controllers.orderbook.filter);


/**
 * 
 * Config
 * 
 * Inicializa as rotas do modulo
 * 
 * @return Void
 * 
 * @author Rubens Neto
 */
module.exports = router;