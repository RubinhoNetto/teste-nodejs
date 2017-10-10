const response = require('../../../utils/response');
const axios = require('axios');

module.exports = {
  /**
   * Lista todos o Books
   */
  list: (req, res) => {
    const dataReturn = {
      result: true,
      message: 'Estou vindo do OrderBook - Lista',
      data: []
    };

    axios
      .get('https://api.bitvalor.com/v1/order_book.json')
      .then(function (response) {
        console.log('response');
      })
      .catch(function (error) {
        console.log('error');
      });

    return res.render('orderbook/orderbook-lista', dataReturn);
    return response(res, dataReturn);
  },

};