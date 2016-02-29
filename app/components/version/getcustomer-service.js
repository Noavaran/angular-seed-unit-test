
//importScripts("bower_components/localforage/dist/localforage.js");
angular.module('myApp').factory('getcustomer-service',[

    function(){
        console.log("5858")
        return{

            getCustomerById :function(id){
                //localforage.setItem('test',200).then(function(resp){
                //    console.log(resp)
                //})
                console.log("ssssssssssssssssssssssssssssssssssssss")
                return {firstName:'Joe',lastName:'Smith',totalSales:50}
            }
        }
    }
]);