"use strict";

//Setter de la app
//Inject de NGComponentRouter obligatorio para las comunicaciones
angular.module("whatapop", ["ngComponentRouter","dahr.ng-image-picker"]);

//Indicamos el modo HTML5 para SPA
angular.module("whatapop").config(function ($locationProvider) {
    
    $locationProvider.html5Mode(true);
    
});

//Indicamos el fichero de rutas para el SPA. Es decir a que posiciones podemos ir

angular.module("whatapop").value("$routerRootComponent", "routerRoot");
