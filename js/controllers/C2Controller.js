(function(){
    'use strict';
    angular.module('plantilla')
        .controller('C2Controller',C2Ctrl);

    function C2Ctrl($location,Activities,NavigationProgress)
    {
        NavigationProgress.viewedC(1);
    }
})();