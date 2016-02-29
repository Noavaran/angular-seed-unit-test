
//importScripts("bower_components/localforage/dist/localforage.js");
angular.module('myApp').factory('localdbsearcher-service',[

    function(){

        return{

            itemFinder :function(path, newParam, isRemove){

                var obj = JSON.parse(localStorage.getItem('test'));
                console.log("+_+++++++++++++++++++++++++",obj)
                //var obj = {a:1,b:{c:[{d:2,e:{f:[{f:5}],g:4}}],r:6},t:7};
                var path = path;

                console.log("))))))))))))))",path, "111",newParam,"2222", isRemove)
                Object.defineProperty(obj,'path',{get : () => {return this.path} , set : (val) => {this.path = val;}
                });
                return new Promise( resolve => {
                    // set obj.path for set object to path find else set obj.path = '' to get path find
                    //obj.path = {name:'saeed'}  //set
                    obj.path = newParam ; // get
                    var pathLen = path.match(/\w+/g).length,reptetiveCount = 0;
                    findPath(obj,1);

                    function findPath(o, pathIndex){
                        if (path == '') {
                            return;
                        }
                        if (path[0] != '.') path = '.' + path
                        if (path[path.length - 1] != '.') path += '.'
                        for (var i in o) {
                            if (path.indexOf('.'+i+'.') > -1){
                                path = path.replace('.'+i,'');
                                if (pathIndex + reptetiveCount == pathLen) {
                                    ibefore = i;
                                    setTimeout(function(){
                                        console.log('after',ibefore)
                                        console.log(path.match(/[\w\d]+/g))
                                        if(path.match(/[\w\d]+/g) == null && !isRemove)
                                            if (obj.path !='')
                                                o[ibefore] = obj.path;
                                            else
                                                obj.path = o[ibefore]
                                        //resolve(path.match(/\w+/))
                                        isRemove && delete o[ibefore];
                                        resolve({regex: path.match(/\w+/) , result:obj})
                                    },100)
                                }
                                if (Array.isArray(o[i]))
                                    for (var j of o[i]){
                                        if (typeof j == 'object')
                                            findPath(j,pathIndex+1)
                                        path = path.replace(new RegExp('.'+j,'g'),'');
                                    }
                                if (typeof o[i] == 'object') {
                                    findPath(o[i],pathIndex+1)
                                }
                            }
                        }
                    }
                });
            }

        }
    }
]);