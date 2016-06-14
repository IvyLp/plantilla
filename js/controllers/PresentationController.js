(function() {
    angular.module('plantilla')
        .controller('PresentationController', PresentationCtrl);

    function PresentationCtrl($location,$timeout,$rootScope)
    {
        /* jshint validthis: true */

        var vm = this;
        var intro1 = angular.element(document.querySelector('#intro1')),
            intro2 = angular.element(document.querySelector('#intro2'));
        $rootScope.clase = "section-bg0";
        $timeout(function()
        {
            intro1.removeClass('zoomIn').addClass('zoomOut');
            $timeout(function(){
                intro1.remove();
                intro2.removeClass('zoomOut').addClass('zoomIn');
            },1000);
        },3000);
    }
})();