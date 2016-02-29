angular.module('myApp').factory('customer-formatting-service',[
    'getcustomer-service',
    function(getcustomerService){
        function getFormattedCustomerInfo(customerId){
            //$localForage.setItem('majid',10).then(function(resp){
            //    console.log("))))))))))))))))",resp)
            //})
            console.log("customer-formatting-service",customerId)

            var customer = getcustomerService.getCustomerById(customerId);
            console.log(customer)
            return customer.firstName + ' ' + customer.lastName + ' Total Sales: $' + customer.totalSales
        }
        return {getFormattedCustomerInfo:getFormattedCustomerInfo};
    }
]);