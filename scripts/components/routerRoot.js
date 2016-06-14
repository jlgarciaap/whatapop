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
            
        },

        {
         name: "LoginForm",
            path: "login",
            component: "loginForm"



        }
        
        
        
    ],
    templateUrl: "views/routerRoot.html"
    
    
    
});