//Test fixture
describe('getFormattedCustomerInfo', function(){
    var getcustomerService;
    var customerFormattingService;
    var localForage;
    beforeEach(function(){
        //module('myApp');

        module('myApp',function($provide) {
            $provide.service('$localForage', function($localForage) {
                console.log("rer")
            });

        });


        //inject(function($injector){
        //    localForage = $injector.get('$localForage')
        //});
        inject( function($injector){
            getcustomerService = $injector.get('getcustomer-service');
            customerFormattingService = $injector.get('customer-formatting-service');
            //spyOn(getcustomerService,['getCustomerById']).and.returnValue(
            //    {firstName:'Joe',lastName:'Smith',totalSales:50}
            //);
        });
    });
    it('should return formatted customer information', function(){
        var formatted = customerFormattingService.getFormattedCustomerInfo(1);
        //expect(getcustomerService.getCustomerById).toHaveBeenCalledWith(1);
        expect(formatted).toBe('Joe Smith Total Sales: $50');
    });
});