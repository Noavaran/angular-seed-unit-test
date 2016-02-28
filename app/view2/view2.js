'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {


  //localDBService.setItem('vendorObj', 'majid').then(function(value) {
  //  console.log("localDBService.setItem",value)
  //  callback(null, true);
  //}, function(error) {
  //  console.error("localDBService.setItem-error",error);
  //});
  //async.auto({
  //  'setItem' : function(callback){
  //    localDBService.setItem('vendorObj', result.getVendorArr.data).then(function(value) {
  //      console.log("localDBService.setItem",value)
  //      callback(null, true);
  //    }, function(error) {
  //      console.error("localDBService.setItem-error",error);
  //    });
  //  },
  //  'getItem' : ["setItem", function(callback,result){
  //    localDBService.getItem('vendorObj').then(function(value) {
  //      console.log("localDBService.getItem",value)
  //      callback(null, true);
  //    }, function(error) {
  //      console.error("localDBService.getItem-error",error);
  //    });
  //  }],
  //  'removeItem' : ["getItem", function(callback,result){
  //    localDBService.removeItem('vendorObj').then(function(value) {
  //      console.log("localDBService.removeItem",value)
  //      callback(null, true);
  //    }, function(error) {
  //      console.error("localDBService.removeItem-error",error);
  //    });
  //
  //  }],
  //  'newGetItem' : ["removeItem", function(callback,result){
  //    localDBService.getItem('vendorObj').then(function(value) {
  //      console.log("localDBService.getItem",value)
  //      callback(null, true);
  //    }, function(error) {
  //      console.error("localDBService.getItem-error",error);
  //    });
  //
  //  }]
  //})
}]);