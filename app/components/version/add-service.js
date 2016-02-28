

angular.module('myApp',[]).factory('add-service',['$q','$rootScope',

    function($q, $rootScope){

        return{
            getItem : function(getItem){
                var defer = $q.defer();
                //$localForage.setItem('somekey', 'some value', function(err, value) {
                //    // Do other things once the value has been saved.
                //    console.log(value);
                //});
                if(getItem == '188'){
                    console.log("_____________getItem_____________",getItem)

                    defer.resolve(true)
                }else{
                    console.log("___________getItem-reject_______________",getItem)
                    defer.reject(false)
                }
                return defer.promise;
            },
            setItem : function(setItem, param){
                var defer = $q.defer();
                if(setItem == 'test'){
                    console.log("____________setItem______________",setItem)
                    defer.resolve(true)
                }else{

                    console.log("______________setItem-reject____________",setItem)
                    defer.reject(false)
                }
                return defer.promise;
            },
            removeItem : function(removeItem){
                var defer = $q.defer();
                if(removeItem == 'set'){
                    console.log("______________removeItem____________",removeItem)
                    defer.resolve(true)
                }else{
                    console.log("______________removeItem-reject____________",removeItem)
                    defer.reject(true)
                }
                return defer.promise;
            }
        }

    }
]);