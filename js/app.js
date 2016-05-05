angular.module('plantilla',['ngRoute','ngAnimate'])
    .config(function($routeProvider){
       $routeProvider
           .when('/',{
              templateUrl:'html/presentacion.html',
              controller: 'pCtrl'
           })
           .when('/home',{
               templateUrl:'html/home.html',
               controller: 'hCtrl'
           })
           .when('/home/a',{
               templateUrl:'html/a.html',
               controller:'aCtrl'
           })
           .when('/home/b',{
               templateUrl:'html/b.html',
               controller:'bCtrl'
           })
           .when('/home/c',{
               templateUrl:'html/c.html',
               controller:'cCtrl'
           })
           .when('/home/d',{
               templateUrl:'html/d.html',
               controller:'dCtrl'
           })
           .when('/home/e',{
               templateUrl:'html/e.html',
               controller:'eCtrl'
           })
           .otherwise({
               redirectTo: '/'
           });

    });
