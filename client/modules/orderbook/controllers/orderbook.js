/**
 * 
 * Models
 */
const modelOrderbook = require('../model/orderbook');

/**
 * 
 * Utils
 */
const fnFormatMoney = require('../../../utils/format_money');
const fnFormatNumber = require('../../../utils/format_number');
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
   * Action: index
   * 
   * Tela inicial do projeto com instruções
   * 
   * @return View
   * @author Rubens Neto
   */
  index: (req, res) => {
    // Objeto de retorno para view
    const dataReturn = {
      result: true,
      message: '',
      data: []
    };

    // Retornando View
    return res.render('orderbook/orderbook-index', dataReturn);
  },

  /**
   * Action: listBids
   * 
   * Lista e Filtra os Orders Books de Compra
   * 
   * @return View
   * @author Rubens Neto
   */
  listBids: (req, res) => {
    // Objeto de retorno para view
    const dataReturn = {
      result: true,
      message: '',
      filter: req.body,
      title: 'Compras',
      data: []
    };

    if (dataReturn.filter.exchange) {
      dataReturn[dataReturn.filter.exchange] = true;
    }

    // Busca dados de Compras
    modelOrderbook
      .get('bids', dataReturn.filter)
      .then((resultData) => {
        if (resultData) {
          dataReturn.data = resultData.map((elem, key) => {
            elem[0] = fnGetNameExchanges(elem[0]);
            elem[1] = fnFormatMoney(elem[1]);
            elem[2] = fnFormatNumber(elem[2]);
            return elem;
          });
        }
        // Contagem de resultados
        dataReturn.message = `Foram encontrados ${resultData.length} registros.`;
        // Retornando View
        return res.render('orderbook/orderbook-lista', dataReturn);
      });
  },

  /**
   * Action: listAsks
   * 
   * Lista e Filtra os Orders Books de Vendas
   * 
   * @return View
   * @author Rubens Neto
   */
  listAsks: (req, res) => {
    // Objeto de retorno para view
    const dataReturn = {
      result: true,
      message: '',
      filter: req.body,
      title: 'Vendas',
      data: []
    };

    if (dataReturn.filter.exchange) {
      dataReturn[dataReturn.filter.exchange] = true;
    }

    // Busca dados de Vendas
    modelOrderbook
      .get('asks', dataReturn.filter)
      .then((resultData) => {
        if (resultData) {
          dataReturn.data = resultData.map((elem, key) => {
            elem[0] = fnGetNameExchanges(elem[0]);
            elem[1] = fnFormatMoney(elem[1]);
            elem[2] = fnFormatNumber(elem[2]);
            return elem;
          });
        }
        // Contagem de resultados
        dataReturn.message = `Foram encontrados ${resultData.length} registros.`;
        // Retornando View
        return res.render('orderbook/orderbook-lista', dataReturn);
      })
      .catch((err) => {
        dataReturn.result = false;
        dataReturn.message = 'Ocorreu um erro ao filtrar os dados. Tente Novamente!';

        // Retornando View
        return res.render('orderbook/orderbook-lista', dataReturn);
      });
  },
};