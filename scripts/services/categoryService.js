"use strict";


angular.module("whatapop").service("CategoryService", function ($http) {
        
    this.getCategories = function () {
        //obtenemos las categorias conn este servicio

        var response = $http.get("http://localhost:8000/api/categories");
        
        
        return response;
    };
});