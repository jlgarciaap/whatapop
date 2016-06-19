"use strict";

angular.module("whatapop").component("routerRoot", {
   
    $routeConfig: [
        {
            name: "Anuncios",
            path: "/products",
            component: "products",
            useAsDefault: true
            
        },
        
        {
            name: "NuevoAnuncio",
            path: "/new",
            component: "newProduct"
            
        },

        {
            name: "ItemDetails",
            path: "/products/:id",
            component: "itemDetails"
            
            
        }
        
        
        
    ],
    templateUrl: "views/routerRoot.html"
    
    
    
});