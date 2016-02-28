'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  "myApp.LocalForageModule"
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.config(['$localForageProvider', function ($localForageProvider) {
  $localForageProvider.config({
    //driver      : 'localStorageWrapper', // if you want to force a driver
    name        : 'RMI', // name of the database and prefix for your data, it is "lf" by default
    version     : 1.0, // version of the database, you shouldn't have to use this
    storeName   : 'keyvaluepairs', // name of the table
    //description : 'some description'
  });

}]);
