const modelOrderbook = require('../model/orderbook');

module.exports = {
  /**
   * Action: list
   * 
   * Lista e Filtra os Orders Books para exibir
   */
  list: (req, res) => {
    const dataReturn = {
      result: true,
      message: '',
      filter: req.body,
      data: []
    };

    dataReturn.filter.order = dataReturn.filter.order ?
      dataReturn.filter.order :
      'bids';

    modelOrderbook
      .get(dataReturn.filter)
      .then((resultData) => {
        dataReturn.data = resultData;
        return res.render('orderbook/orderbook-lista', dataReturn);
      });
  },
};