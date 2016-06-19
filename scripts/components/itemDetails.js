"use strict";

var dependencies = {

    templateUrl: "views/itemDetails.html",

    controller: function (ProductService) {

        var self= this;

        self.$routerOnActivate = function (infoFromProductsView) {
            //Con el HOOk $routerOnActivate cada vez que se llama recibimos un monton de info, entre
            //otras cosas el parametro que nosotros mismos hemos configurado
            //Y lo podemos gestionar dentro del params

            var product = infoFromProductsView.params.id;

            ProductService.getProducts(product).then(function (response) {

                //publicamos hacia la vista la info
                self.product = response.data;


            });

            self.absolutePathItem = ProductService.photoAbsolutePath;

        };
        
    }

};

angular.module("whatapop").component("itemDetails", dependencies);