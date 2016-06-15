"use strict";

angular.module("whatapop").service("newFormProduct", function () {
   return{

       restrict: "EA", //Como element y Atributo
       templateUrl: "views/newFormProduct.html",

       scope: {
           clickToAccept: "&" //Con esto es comunicacion hacia afuera o notificacion
       },
       link: function (scope) { //Establecemos la logica con los datos que se le pasan a la directiva

           //creamos objeto anuncio
           scope.anuncio= {

             name: "",
             description: "",
               category:{},
               seller: {},
               published_date: "",
               state: "",
               price: "",
               photos: []

           };
           
           scope.notifyNewProduct = function () {
               
               
               scope.clickToAccept({ anuncio: scope.anuncio});  //Pasamos con el clickToAccept hacia fuera el anuncio completo
               
           };
           
       }


   };


});