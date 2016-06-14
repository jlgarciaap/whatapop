"use strict";


angular.module("whatapop").service("UserService", function ($http) {

    this.getProducts = function () {

        return $http.get("http://localhost:8000/api/users");
    };
});

