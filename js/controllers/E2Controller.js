(function(){
    'use strict';
    angular.module('plantilla')
        .controller('E2Controller',E2Ctrl);

    function E2Ctrl($location,Activities,NavigationProgress)
    {
        NavigationProgress.viewedE(1);
    }
})();