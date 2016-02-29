angular.module('myApp').factory('localDb-service',['localdbsearcher-service','$q',
    function(localdbsearcherService,$q){
        return{
            create : function(setItem, param){
                return localStorage.setItem(setItem, JSON.stringify(param));
            },
            setItem : function(path, newData){
                var defer = $q.defer();
               localdbsearcherService.itemFinder(path, newData, false).then( result => {
                   if(result.regex == null){
                       localStorage.setItem('test', JSON.stringify(result.result));
                       defer.resolve([true,{data:result}])
                   }else{
                       defer.reject([false,{error:'Not Found'}])
                   }
               });
                return defer.promise;
            },
            getItem : function(path){
                var defer = $q.defer();
                localdbsearcherService.itemFinder(path, '', false).then( result => {
                    if(result.regex == null){
                        console.log("found : ",result.result.path)
                        defer.resolve([true,{data:result.result}])
                    }else{
                        defer.reject([false,{error:'Not Found'}])
                    }
                });
                return defer.promise;
            },
            removeItem : function(path){
                var defer = $q.defer();
                localdbsearcherService.itemFinder(path, '',true).then( result => {
                    if(result.regex == null){
                        localStorage.setItem('test', JSON.stringify(result.result));
                        defer.resolve([true,{data:result.result}])
                    }else{
                        defer.reject([false,{error:'Not Found'}])
                    }
                });
                return defer.promise;
            }
        }
    }
]);