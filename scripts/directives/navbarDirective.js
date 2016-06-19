"use strict";

angular.module("whatapop").directive("navBarDirective", function () {
    
    //La barra de navegacion en una vista por si queremos hacer algo con ella
    return {

        restrict: "EA",
        templateUrl: "views/navBarDirective.html"
        
    };
});