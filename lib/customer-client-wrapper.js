'use strict';

const CustomerDataService = require('./customer-client-service.js');
class CustomerClientWrapper {

  constructor() {
    this.service = new CustomerDataService();
  }
  getService() {
    return this.service;
  }
}

module.exports = (new CustomerClientWrapper());
