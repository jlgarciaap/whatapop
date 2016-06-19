"use strict";

angular.module("whatapop").service("PositionService", function () {

    //obtenemos la posicion del usuario con este servicio
    
    if(navigator.geolocation) {

      this.getUserPosition = function(userPosition) {

          return navigator.geolocation.getCurrentPosition(userPosition);
        };
      }

});