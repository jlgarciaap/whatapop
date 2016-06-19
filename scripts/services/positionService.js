"use strict";

angular.module("whatapop").service("PositionService", function () {


    
    if(navigator.geolocation) {

      this.getUserPosition = function(userPosition) {

          return navigator.geolocation.getCurrentPosition(userPosition);
        };
      }

});