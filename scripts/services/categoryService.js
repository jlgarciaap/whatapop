"use strict";


angular.module("whatapop").service("CategoryService", function ($http) {
        
    this.getCategories = function () {

        var respuesta = $http.get("http://localhost:8000/api/categories");

        console.log(respuesta);
        
        return respuesta;
    };
});