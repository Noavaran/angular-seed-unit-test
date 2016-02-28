
describe('add', function(){




    'use strict';
    var addService;
    var localForage;

    beforeEach(module('myApp'));

    describe('restAPI unit tests', function() {
        beforeEach(inject(
            function($injector) {
                addService = $injector.get('add-service');
                localForage = $injector.get('$localForage');
            }
        ));

        it('Should remove in local storage the Authorization header', function(){
                spyOn(localForage, "setItem");
                addService.getItem('88').then(function(resp){

                    expect(resp).toBe(true);
            
                }).catch(function(error){
                    expect(error).not.toBe(false);
                });

                addService.setItem("set", 7).then(function(resp){

                    expect(resp).toBe(true);

                }).catch(function(error){
                    expect(error).not.toBe(false);
                });

                addService.removeItem("set").then(function(resp){

                    expect(resp).toBe(true);

                }).catch(function(error){
                    expect(error).not.toBe(false);
                });
        });
    });



    //var addService;
    //var $localForage;
    //var $scope;
    //beforeEach(function(){
    //    module('myApp');
    //
    //
    //
    //    inject( function($injector){
    //        addService = $injector.get('add-service');
    //        $localForage = $injector.get('$localForage');
    //        spyOn($localForage,[]);
    //    });
    //
    //    });
    //
    //
    //it('get storage item', function(){
    //    addService.getItem('88').then(function(resp){
    //
    //        expect(resp).toBe(true);
    //
    //    }).catch(function(error){
    //        expect(error).not.toBe(false);
    //    });
    //
    //    addService.setItem("set", 7).then(function(resp){
    //
    //        expect(resp).toBe(true);
    //
    //    }).catch(function(error){
    //        expect(error).not.toBe(false);
    //    });
    //
    //    addService.removeItem("set").then(function(resp){
    //
    //        expect(resp).toBe(true);
    //
    //    }).catch(function(error){
    //        expect(error).not.toBe(false);
    //    });
    //});
});
