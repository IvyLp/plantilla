angular.module('plantilla',['ngRoute'])
    .config(function($routeProvider){
       $routeProvider
           .when('/',{
              templateUrl:'html/presentacion.html',
              controller: 'preCtrl'
           }).
           otherwise({
               redirectTo: '/'
           });

    })
    .controller('preCtrl',function(){
        alert('hola Mundo');
    });