const axios = require('axios');

module.exports = {

  get: (filterParam) => {
    return new Promise((resolve) => {
      axios
        .get('https://api.bitvalor.com/v1/order_book.json')
        .then((res) => {
          let dataResult = res.data[filterParam.order];

          if (filterParam.exchange) {
            dataResult = dataResult.filter((arr, key) => {
              if (filterParam.exchange !== '') {
                if (arr[0] === filterParam.exchange) {
                  return arr;
                }
              }
            });
          }            

          if (filterParam.valor_ini || filterParam.valor_end) {
            dataResult = dataResult.filter((arr, key) => {
              if (filterParam.valor_ini && filterParam.valor_end) {
                if (arr[1] >= filterParam.valor_ini && arr[1] <= filterParam.valor_end) {
                  return arr;
                }
              } else if (filterParam.valor_ini) {
                if (arr[1] >= filterParam.valor_ini) {
                  return arr;
                }
              } else if (filterParam.valor_end) {
                if (arr[1] <= filterParam.valor_end) {
                  return arr;
                }
              }
            });
          }
            
          if (filterParam.qtd_ini || filterParam.qtd_end) {
            dataResult = dataResult.filter((arr, key) => {
              if (filterParam.qtd_ini && filterParam.qtd_end) {
                if (arr[2] >= filterParam.qtd_ini && arr[2] <= filterParam.qtd_end) {
                  return arr;
                }
              } else if (filterParam.qtd_ini) {
                if (arr[2] >= filterParam.qtd_ini) {
                  return arr;
                }
              } else if (filterParam.qtd_end) {
                if (arr[2] <= filterParam.qtd_end) {
                  return arr;
                }
              }
            });
          }
            
          resolve(dataResult)
        });
    });
  },
}