const router = require('express').Router();

const controllers ={
    orderbook: require('../controllers/orderbook'), 
} 

// create
// router.post('/', controller.save);
// read
router.get('/', controllers.orderbook.list);
// router.get('/:id', controller.get);
// update
// router.put('/:id', controller.update);
// delete
// router.delete('/:id', controller.remove);

module.exports = router;