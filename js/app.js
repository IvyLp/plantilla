(function(){
    'use strict';
    angular.module('plantilla',['ngRoute','ngAnimate'])
        .config(config);

    function config($routeProvider)
    {
        $routeProvider
            .when('/',{
                templateUrl:'html/presentation.html',
                controller: 'PresentationController',
                controllerAs: 'pCtrl'
            })
            .when('/home',{
                templateUrl:'html/navigation.html',
                controller: 'NavigationController',
                controllerAs: 'nCtrl'
            })
            .when('/home/a',{
                templateUrl:'html/a.html',
                controller:'AController',
                controllerAs:'aCtrl'
            })
            .when('/home/a1',{
                templateUrl:'html/a1.html',
                controller:'A1Controller',
                controllerAs:'a1Ctrl'
            })
            .when('/home/a2',{
                templateUrl:'html/a2.html'
            })
            .when('/home/a3',{
                templateUrl:'html/a3.html',
                controller:'A3Controller',
                controllerAs:'a3Ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();