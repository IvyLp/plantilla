(function(){
    'use strict';
    angular.module('plantilla')
        .controller('D2Controller',D2Ctrl);

    function D2Ctrl($location,Activities,NavigationProgress)
    {
        NavigationProgress.viewedD(1);
    }
})();