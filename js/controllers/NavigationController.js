(function() {
    angular.module('plantilla')
        .controller('NavigationController', NavigationCtrl);

    function NavigationCtrl($location)
    {
        var vm  = this;
        vm.mouseenter = function(item)
        {
            angular.element(document.querySelector('#'+item)).removeClass('zoomOut').addClass('zoomIn');
        }
        vm.mouseleave = function(item)
        {
            angular.element(document.querySelector('#'+item)).removeClass('zoomIn');
        }

        vm.go = function(path)
        {
            $location.path(path);
        }

    }
})();