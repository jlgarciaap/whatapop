"use strict";

var dependencies = {

    bindings:{

        $router: "<"
    },
    templateUrl:"views/newProduct.html" ,
    controller: function (ProductService) {

        var self = this;
        var imageProduct;

        //Pasamos la imagen que recibimos a la vista
        self.imageSelected = function(imageRecieve) {
            imageProduct = imageRecieve;
        };

        self.imageError = function() {
            imageProduct = undefined;
        };


        //Guardamos el producto con los datos del producto y la imagen recibida
        self.saveProduct = function (savingProduct) {

            ProductService.saveProductRecieve(savingProduct, imageProduct).then(function () {

                self.$router.navigate(['Anuncios']);
            });

        };

    }

};

angular.module("whatapop").component("newProduct", dependencies);