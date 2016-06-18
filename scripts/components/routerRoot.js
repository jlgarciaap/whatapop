"use strict";

angular.module("whatapop").component("routerRoot", {
   
    $routeConfig: [
        {
            name: "Anuncios",
            path: "/anuncios",
            component: "anuncios",
            useAsDefault: true
            
        },
        
        {
            name: "NuevoAnuncio",
            path: "/new",
            component: "nuevoAnuncio"   
            
        },

        {
         name: "LoginForm",
            path: "login",
            component: "loginForm"
            
        },
        {
            name: "ItemDetails",
            path: "/anuncios/:id",
            component: "itemDetails"
            
            
        }
        
        
        
    ],
    templateUrl: "views/routerRoot.html"
    
    
    
});