"use strict";

angular.module("whatapop").component("nuevoAnuncio", {
    
   bindings:{
    
    $router: "<"
},
    templateUrl:"views/nuevoAnuncio.html" ,
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
    
});