(function(){
    'use strict';
    angular.module('plantilla')
        .controller('B2Controller',B2Ctrl);

    function B2Ctrl($location,Activities,NavigationProgress)
    {
        NavigationProgress.viewedB(1);
    }
})();