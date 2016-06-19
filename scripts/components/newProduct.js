"use strict";

var dependencies = {

    bindings:{

        $router: "<"
    },
    templateUrl:"views/newProduct.html" ,
    controller: function (ProductService) {

        var self = this;
        var imageProduct;

        self.imageSelected = function(imageRecieve) {
            imageProduct = imageRecieve;
        };

        self.imageError = function() {
            imageProduct = undefined;
        };


        self.saveProduct = function (savingProduct) {

            ProductService.saveProductRecieve(savingProduct, imageProduct).then(function () {

                self.$router.navigate(['Anuncios']);
            });

        };

    }

};

angular.module("whatapop").component("newProduct", dependencies);