'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    console.log(text)
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);
