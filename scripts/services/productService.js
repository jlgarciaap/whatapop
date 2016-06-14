"use strict";


angular.module("whatapop").service("ProductService", function ($http, Properties) {

    this.getProducts = function () {

        return $http.get(Properties.serverUrl+Properties.endpointProducts);
    };

    this.photoAbsolutePath = function (relativePath) {

        //Este es el metodo corto de hacer uun if, es decir si existe rutaRelativa hacemos
        //Http//localhost.....+ rutaRelativa. Si no undefined

        return relativePath? (Properties.serverUrl +"/"+ relativePath)
            : undefined;

    };
});
