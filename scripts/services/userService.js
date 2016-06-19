"use strict";


angular.module("whatapop").service("UserService", function ($http) {

    //obtenemos los usuarios almacenados
    this.getUsers = function () {

        return $http.get("http://localhost:8000/api/users");
    };
});

