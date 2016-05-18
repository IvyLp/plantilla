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
            .when('/home/b',{
                templateUrl:'html/b.html',
                controller:'BController',
                controllerAs: 'bCtrl'
            })
            .when('/home/b1',{
                templateUrl:'html/b1.html',
                controller:'B1Controller',
                controllerAs: 'b1Ctrl'
            })
            .when('/home/c',{
                templateUrl:'html/c.html',
                controller:'CController',
                controllerAs: 'cCtrl'
            })
            .when('/home/c1',{
                templateUrl:'html/c1.html',
                controller:'C1Controller',
                controllerAs: 'c1Ctrl'
            })
            .when('/home/d',{
                templateUrl:'html/d.html',
                controller:'DController',
                controllerAs: 'dCtrl'
            })
            .when('/home/d1',{
                templateUrl:'html/d1.html',
                controller:'D1Controller',
                controllerAs: 'd1Ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();