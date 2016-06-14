angular.module("whatapop").component("routerRoot", {
   
    $routeConfig: [
        {
            name: "Anuncios",
            path: "/anuncios",
            component: "anuncios"
            
        },
        
        {
            name: "NuevoAnuncio",
            path: "/new",
            component: "nuevoAnuncio"   
            
        }
        
        
        
    ],
    templateUrl: "views/routerRoot.html"
    
    
    
});