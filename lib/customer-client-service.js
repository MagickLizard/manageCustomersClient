'use strict';

const CustomerDataService = require('../services/customer-data-service.js');
class CustomerClientService {
  constructor(){
    this.customerService = new CustomerDataService();
  }
  makeFullNameLookup(fullNameLookupObject) {
    return this.customerService.makeFullNameLookup(fullNameLookupObject);
  }
}

module.exports = CustomerClientService;
