
describe('add', function(){




    'use strict';
    var addService;
    var localForage;

    beforeEach(module('myApp'));

    describe('test', function() {
        beforeEach(inject(
            function($injector) {
                addService = $injector.get('add-service');
                //localForage = $injector.get('$localForage');
            }
        ));

        inject(function($localForage) {
            localForage = $localForage;

            spyOn(localForage, 'getItem');
            spyOn(localForage, 'setItem');
            console.log(localForage)
        });

        it('Should remove in localForage the Authorization header', function(){
            //spyOn(localForage,['setItem']);
                //spyOn(localForage, "setItem");
            //localForage.setItem('test', 50).then(function(resp){
            //    console.log('sssssssssss')
            //})
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
