"use strict";

var dependencies = ["CategoryService" ,function () {
    return{

        restrict: "EA", //Como element y Atributo
        templateUrl: "views/newFormProduct.html",

        scope: {
            clickToAccept:  "&" //Con esto es comunicacion hacia afuera o notificacion
        },
        link: function (scope) { //Establecemos la logica con los datos que se le pasan a la directiva

            var fecha= new Date();
            //creamos objeto anuncio
            scope.anuncio= {

                name: "",
                description: "",
                category:{
                    id:"",
                    name: ""
                },
                seller: {},
                published_date: fecha.getTime(),
                state: "selling",
                price: "",
                photos: []

            };

            scope.notifyNewProduct = function () {


                scope.clickToAccept({ anuncio: scope.anuncio});  //Pasamos con el clickToAccept hacia fuera el anuncio completo

            };

            scope.canSave = function () {

                return scope.anuncio.name && scope.anuncio.price > 0 && scope.anuncio.description && scope.anuncio.category.name;

            };

        }


    };


}];

angular.module("whatapop").directive("newFormProduct", dependencies );