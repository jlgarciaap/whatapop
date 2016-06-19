"use strict";



angular.module("whatapop").service("ProductService", function ($http, Properties) {

    this.getProducts = function () {

        return $http.get(Properties.serverUrl+Properties.endpointProducts);
    };

    this.getProducts = function (productId) {

        if(productId) {

            return $http.get(Properties.serverUrl + Properties.endpointProducts + "/" + productId);
        } else {

           return $http.get(Properties.serverUrl+Properties.endpointProducts);

        }
    };

    this.saveProductRecieve = function (productRecieve, imageData) {

        var response;

        if(imageData){

            var data = new FormData();
            data.append("photo", imageData);

            //Modificamos content-type para que angular haga
            //un poco de magia
            var config = {

                "headers":{

                    "Content-Type": undefined

                }

            };

            response = $http.post(Properties.serverUrl + Properties.endpointImages, data, config)
                .then(function (responseData) {
                    var relativePath = responseData.data.path;

                    productRecieve.photos = relativePath;

                    return $http.post(Properties.serverUrl+Properties.endpointProducts, productRecieve);
                });
        } else {

            response = $http.post(Properties.serverUrl+Properties.endpointProducts, productRecieve);

        }



        return response;
    };

    this.photoAbsolutePath = function (relativePath) {

        //Este es el metodo corto de hacer uun if, es decir si existe rutaRelativa hacemos
        //Http//localhost.....+ rutaRelativa. Si no undefined

        return relativePath ? (Properties.serverUrl +"/"+ relativePath)
            : undefined;

    };
    
    //Obtenemos la fecha 
    this.getDateLocale = function (dateRecieve) {

        return new Date(dateRecieve);

    };
});
