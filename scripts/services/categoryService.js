"use strict";


angular.module("whatapop").service("CategoryService", function ($http) {
        
    this.getCategories = function () {

        var response = $http.get("http://localhost:8000/api/categories");
        
        
        return response;
    };
});