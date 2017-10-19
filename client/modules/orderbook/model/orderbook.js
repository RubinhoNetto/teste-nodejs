const axios = require('axios');

/**
 * Model: orderbook
 * 
 * @return void
 * @author Rubens Neto
 */
module.exports = {
  /**
   * Retorna resultado do get na url
   * 
   * @return Promise
   * @author Rubens Neto
   */
  get: (type, filterParam) => {
    return new Promise((resolve, reject) => {
      axios
        .get('http://api.bitvalor.com/v1/order_book.json')
        .then((res) => {
          let arrayResult = [];

          try {
            if (Array.isArray(type)) {
              type.forEach((typeBook) => {
                arrayResult[typeBook] = filterElements(res.data[typeBook], filterParam);
              });
            } else {
              arrayResult = filterElements(res.data[type], filterParam);
            }
            // callback do Promise
            resolve(arrayResult);
          } catch (e) {
            reject(e);
          }
        });
    })
    .catch((err) => {
      return [];
    });
  },
}

const filterElements = (arrayElements, filterParam) => {
  // Result da busca na API
  let dataResult = JSON.parse(JSON.stringify(arrayElements));
  
  // Filtro dos registros de Exchanges
  if (filterParam.exchange && filterParam.exchange !== '') {
    dataResult = dataResult.filter((arr, key) => {
      if (arr[0] === filterParam.exchange) {
        return arr;
      }
    });
  }            
  
  // Filtro dos registros de Valor Inicial
  if (filterParam.valor_ini && filterParam.valor_ini !== '') {
    dataResult = dataResult.filter((arr, key) => {
      if (arr[1] >= filterParam.valor_ini) {
        return arr;
      }
    });
  }
  
  // Filtro dos registros de Valor Final
  if (filterParam.valor_end && filterParam.valor_end !== '') {
    dataResult = dataResult.filter((arr, key) => {
      if (arr[1] <= filterParam.valor_end) {
        return arr;
      }
    });
  }
  
  // Filtro dos registros de Quantidade Inicial
  if (filterParam.qtd_ini && filterParam.qtd_ini !== '') {
    dataResult = dataResult.filter((arr, key) => {
      if (arr[2] >= filterParam.qtd_ini) {
        return arr;
      }
    });
  }
  
  // Filtro dos registros de Quantidade Final
  if (filterParam.qtd_end && filterParam.qtd_end !== '') {
    dataResult = dataResult.filter((arr, key) => {
      if (arr[2] <= filterParam.qtd_end) {
        return arr;
      }
    });
  }

  return dataResult;
};