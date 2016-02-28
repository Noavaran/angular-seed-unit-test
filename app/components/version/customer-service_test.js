//describe('LocalStorageService', function () {
//    'use strict';
//    var storage;
//    var restAPI;
//
//    beforeEach(module('main-module'));
//
//    describe('restAPI unit tests', function() {
//        beforeEach(inject(
//            function($injector) {
//                storage = $injector.get('storage');
//                restAPI = $injector.get('restAPI');
//            }
//        ));
//
//        it('Should remove in local storage the Authorization header', function(){
//            spyOn(storage, "set");
//            restAPI.removeHeader("Authorization");
//            expect(storage.set).toHaveBeenCalled();
//        });
//    });
//
//});