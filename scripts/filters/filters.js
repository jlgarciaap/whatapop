"use strict";

angular.module('whatapop')
    .filter("sanitize", ['$sce', function($sce) {
        return function(htmlCode){


            return $sce.trustAsHtml(htmlCode);


        };
    }]);


angular.module('whatapop').filter("filterPosition",['$haversine', function ($haversine) {

        return function (products, usersColection, actualPosition, dist) {

            dist = dist || 100000000;

                if (actualPosition) {


                        var usersNear = usersColection.reduce(function (usersSelected, users) {


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

                       var nick = product.seller.nick;


                    for(var i = 0 ; i<= usersNear.length;i++) {

                        console.log(usersNear[i]);

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

                }else {

                    return products;

            };
        };
}]);
