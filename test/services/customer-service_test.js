const expect = require('chai').expect;
const CustomerDataService = require('../../services/customer-data-service');

describe('CustomerDataService class - to make requests ', () => {
  const customerService;
  describe('#lookupContact', () => {
    beforeEach(() => {
      customerService = new CustomerDataService();
    });

    it('should resolve promise', () => customerService
      .makeRequest(customerService.url, 'customerObject')
      .then((result) => {
        expect(result.success).to.equal(true);
        done();
      }));
  });
});
