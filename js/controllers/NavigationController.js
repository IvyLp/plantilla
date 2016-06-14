(function() {
    angular.module('plantilla')
        .controller('NavigationController', NavigationCtrl);

    function NavigationCtrl($location,NavigationProgress)
    {
        var vm  = this;
        vm.progress = NavigationProgress.getProgress();
        vm.instruction = 'html/instruction.html';
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