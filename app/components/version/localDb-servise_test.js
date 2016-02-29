describe('ItemService', function() {
    var store = {};
    var ls = function() {
        return JSON.parse(store.storage);
    };
    //var localDbResearcherService;
    var localdbsearcherService;
    var localDbService;
    beforeEach(function() {
        module('myApp');
        inject(function($injector) {
            localdbsearcherService = $injector.get('localdbsearcher-service');
            //localDbResearcherService = $injector.get('localDbResearcher-service');
            localDbService = $injector.get('localDb-service');
        });
    });
    it('migrate from legacy to version 0.', function(store) {
        store = {a:1,b:{c:[{d:2,e:{f:[{f:5}],g:4}}],r:6},t:7};
        //localDbService.create("test", store)

        //localDbService.setItem('b.c', {name:'saeeetteeeedsdsdseeeeeeeeed'}).then(function(resp){
        //    expect(resp).toBe(true);
        //}).catch(function(error){
        //    expect(error).toBe(true);
        //});


        //localDbService.getItem('b').then(function(resp){
        //
        //    expect(resp).toBe(true);
        //
        //}).catch(function(error){
        //    expect(error).not.toBe(false);
        //});

        localDbService.removeItem('b.c').then(function(resp){
            expect(resp).toBe(true);
        }).catch(function(error){
            expect(error).not.toBe(false);
        });


    });
});