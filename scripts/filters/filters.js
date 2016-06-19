"use strict";

angular.module('whatapop')
    .filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode){
            //Con esto devolvemos codigo HTML bien formateado a la vista
            return $sce.trustAsHtml(htmlCode);

        };
    }]);


angular.module('whatapop').filter("filterPosition",['$haversine', function ($haversine) {

    //Este filtro es para filtrar por distancia los productos

        return function (products, usersColection, actualPosition, dist) {
            //Todos estos datos los pasamos desde la vista que nos hace de paso desde el componente
            dist = dist || 100000000;

                if (actualPosition) {
                //Controlamos que disponemos de la posicion del usuario

                        var usersNear = usersColection.reduce(function (usersSelected, users) {

                            //Recorremos los usuarios y si la distancia nos coincide con lo que nos
                            //pasan desde la vista lo añadimos al acumulador

                        var usersPosition = {

                            "latitude": users.latitude,
                            "longitude": users.longitude
                        };


                        var distance = $haversine.distance(actualPosition.coords, usersPosition);


                        if (distance <= dist) {

                            usersSelected.push(users.nick);

                        };

                            return usersSelected;

                    },[]);


                   var productsFilter = products.reduce(function (productsAcumulate, product) {

                       //Una vez que tenemos los usuarios que estan en la distancia seleccionada
                       //buscamos los productos y los devolvemos


                       var nick = product.seller.nick;


                    for(var i = 0 ; i<= usersNear.length;i++) {

                        if (usersNear[i]) {

                        var user = usersNear[i].toString();

                            if (nick == user) {

                                productsAcumulate.push(product);


                            } else {

                                productsAcumulate = productsAcumulate;

                            }

                        }
                    }

                       return productsAcumulate;



                   }, []);
    
                    return productsFilter;
                    //devolvemos a la vista los productos que coinciden con nuestra busqueda

                }else {
                    //Si no disponemos de la posicion del usuario devolvemos los productos sin este filtro
                    return products;

            };
        };
}]);
