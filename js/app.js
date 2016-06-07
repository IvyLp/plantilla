(function(){
    'use strict';
    angular.module('plantilla',['ngRoute','ngAnimate','dndLists'])
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
                controllerAs: 'vm'
            })
            .when('/home/a',{
                templateUrl:'html/a.html',
                controller:'AController',
                controllerAs:'vm'
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
                controllerAs: 'vm'
            })
            .when('/home/b1',{
                templateUrl:'html/b1.html',
                controller:'B1Controller',
                controllerAs: 'b1Ctrl'
            })
            .when('/home/b2',{
                templateUrl:'html/b2.html'
            })
            .when('/home/b3',{
                templateUrl:'html/b3.html',
                controller:'B3Controller',
                controllerAs: 'b3Ctrl'
            })
            .when('/home/c',{
                templateUrl:'html/c.html',
                controller:'CController',
                controllerAs: 'vm'
            })
            .when('/home/c1',{
                templateUrl:'html/c1.html',
                controller:'C1Controller',
                controllerAs: 'c1Ctrl'
            })
            .when('/home/c2',{
                templateUrl:'html/c2.html'
            })
            .when('/home/c3',{
                templateUrl:'html/c3.html',
                controller:'C3Controller',
                controllerAs: 'c3Ctrl'
            })

            .when('/home/d',{
                templateUrl:'html/d.html',
                controller:'DController',
                controllerAs: 'vm'
            })
            .when('/home/d1',{
                templateUrl:'html/d1.html',
                controller:'D1Controller',
                controllerAs: 'd1Ctrl'
            })
            .when('/home/d2',{
                templateUrl:'html/d2.html'
            })
            .when('/home/d3',{
                templateUrl:'html/d3.html',
                controller:'D3Controller',
                controllerAs: 'd3Ctrl'
            })
            .when('/home/e',{
                templateUrl:'html/e.html',
                controller:'EController',
                controllerAs: 'vm'
            })
            .when('/home/e1',{
                templateUrl:'html/e1.html',
                controller:'E1Controller',
                controllerAs: 'e1Ctrl'
            })
            .when('/home/e2',{
                templateUrl:'html/e2.html'
            })
            .when('/home/e3',{
                templateUrl:'html/e3.html',
                controller:'E3Controller',
                controllerAs: 'e3Ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();