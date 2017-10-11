const router = require('express').Router();

const controllers ={
    orderbook: require('../controllers/orderbook'), 
} 

router.post('/', controllers.orderbook.list);
router.get('/', controllers.orderbook.list);

module.exports = router;