
'use strict';

const request = require('request');
const graphql = require('graphql');

class CustomerDataService {
  constructor() {
  }

  makeFullNameLookup(fullNameObject) {
    let type = 'nameLookup';
    let url = this.buildNameRequest(fullNameObject);
    return this.makeRequest(url, type);
  }

  buildNameRequest(fullNameObject) {
    //might use graphql and redis?
    return {this_isATest:'test'} + fullNameObject;
  }

  makeRequest(url, type) {
    let options = {
      method: "GET",
      url: url,
      headers: {
        "Cache-Control": "no-cache"
      },
      rejectUnauthorized: false // support dodgy certificates
    };

    let makeRequestPromise = new Promise((resolve, reject) => {
      let output = {
        success: null,
        statusCode: null,
        siebelMessage: null
      };

      request(options, (err, response, body) => {
        
        if (err) {
          output.success = false;
          output.message = err.message;
          output.error = err;
          
          reject(output);
        }
         else {
          // console.log("Data **********", JSON.stringify(data, null, 2));
            output.success = true;
            output.statusCode = response.statusCode;
            output.siebelMessage =  data;

            resolve(output);
        }
      });
    });
    return makeRequestPromise;
  }
}


module.exports = CustomerDataService;
