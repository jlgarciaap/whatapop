"use strict";

angular.module("whatapop").component("anuncios",{

    templateUrl:"views/anuncios.html",
    controller: function (ProductService) {


        var self = this;

        //Usamos un hook para que se dispare esto cuando se inicie el componente $onInit

        self.$onInit = function () {//lo ponemos para que se actualice cada vez que lo llamamos para que se muestre


            //Nos devuelve una promesa. POr eso el then. Y dentro del then en la funcion nos devuelve una
            //respuesta el navegador
            ProductService.getProducts().then(function (respuesta) {

                //En la respuesta viene mucha informacion pero nos interesa el data nada mas
                self.products = respuesta.data;
                
                

            });

        };

        self.absolutePath = ProductService.photoAbsolutePath;

    }  

});