"use strict";

angular.module("whatapop").component("itemDetails",{

    templateUrl: "views/itemDetails.html",
    
    controller: function (ProductService) {
        
        var self= this;
        
        self.$routerOnActivate = function (infoDesdeVistaAnuncios) {
            //Con el HOOk $routerOnActivate cada vez que se llama recibimos un monton de info, entre
            //otras cosas el parametro que nosotros mismos hemos configurado
            //Y lo podemos gestionar dentro del params
          
            var product = infoDesdeVistaAnuncios.params.id;
            
            ProductService.getProducts(product).then(function (respuesta) {
               
                //publicamos hacia la vista la info
                self.product = respuesta.data;
                
                
            });

            self.absolutePathItem = ProductService.photoAbsolutePath;
            
        };
        
        
    }


});