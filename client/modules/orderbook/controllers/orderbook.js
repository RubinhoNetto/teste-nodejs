/**
 * 
 * Models
 */
const modelOrderbook = require('../model/orderbook');

/**
 * 
 * Utils
 */
const fnGetNameExchanges = require('../../../utils/get_name');


/**
 * 
 * Objeto Controller OrderBook
 * 
 * @return Void
 * @author Rubens Neto
 */
module.exports = {
  /**
   * Action: filter
   * 
   * Lista e Filtra os Orders Books
   * 
   * @return View
   * @author Rubens Neto
   */
  filter: (req, res) => {
    // Objeto de retorno para view
    const dataReturn = {
      result: true,
      message: '',
      data: []
    };

    const type = req.params.type || ['asks', 'bids'];
    const filter = req.query;

    // Busca dados de Vendas
    modelOrderbook
      .get(type, filter)
      .then((resultData) => {
        if (resultData) {
          dataReturn.data = resultData.map((elem, key) => {
            elem[0] = fnGetNameExchanges(elem[0]);
            return elem;
          });
        }
        // Contagem de resultados
        dataReturn.message = `Foram encontrados ${resultData.length} registros.`;
        // Populando o data
        dataReturn.data = resultData;

        return res.json(dataReturn);
      })
      .catch((err) => {
        dataReturn.result = false;
        dataReturn.message = 'Ocorreu um erro ao filtrar os dados. Tente Novamente!';

        return res.status(500).json(dataReturn);
      });
  },
};