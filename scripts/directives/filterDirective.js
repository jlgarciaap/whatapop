"use strict";


angular.module("whatapop").directive("filterDirective", function () {

    //Creamos las barras de fultro y busqueda en una directiva por si queremos 
    //usarlas en otro lado
    
    return{

        restrict:"EA",
        templateUrl: "views/filterDirective.html",
        

    };

});