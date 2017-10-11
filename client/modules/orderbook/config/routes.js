const router = require('express').Router();

/**
 * 
 * Config de rotas da das controllers
 */
const controllers ={
    orderbook: require('../controllers/orderbook'), 
} 

// Index do projeto
router.get('/', controllers.orderbook.index);

// Rota de Compras
router.post('/compras', controllers.orderbook.listBids);
router.get('/compras', controllers.orderbook.listBids);

// Rota de Vendas
router.post('/vendas', controllers.orderbook.listAsks);
router.get('/vendas', controllers.orderbook.listAsks);


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