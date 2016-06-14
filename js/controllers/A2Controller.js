(function(){
    'use strict';
    angular.module('plantilla')
        .controller('A2Controller',A2Ctrl);

    function A2Ctrl($location,Activities,NavigationProgress)
    {
        NavigationProgress.viewedA(1);
    }
})();