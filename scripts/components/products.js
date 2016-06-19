"use strict";

var dependencies = {

    templateUrl:"views/products.html",
    controller: function (ProductService, PositionService, UserService) {


        var self = this;

        //Usamos un hook para que se dispare esto cuando se inicie el componente $onInit

        self.$onInit = function () {//lo ponemos para que se actualice cada vez que lo llamamos para que se muestre


            //Nos devuelve una promesa. POr eso el then. Y dentro del then en la funcion nos devuelve una
            //respuesta el navegador
            ProductService.getProducts().then(function (response) {

                //En la respuesta viene mucha informacion pero nos interesa el data nada mas
                self.products = response.data;

            });

            PositionService.getUserPosition(function (response) {

                self.actualPosition = response;


            });

            UserService.getUsers().then(function (response) {


                self.users = response.data;
            });



        };

        self.absolutePath = ProductService.photoAbsolutePath;

        self.dateLocale = ProductService.getDateLocale;

    }

};

angular.module("whatapop").component("products", dependencies);