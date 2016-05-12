(function(){
    angular.module('plantilla')
        .controller('A1Controller',A1Ctrl);

    function A1Ctrl($location,ScrollToService)
    {
        var vm = this;
        vm.saltaSlide = function(eID)
        {
            ScrollToService.scrollTo(eID);
        }
    }


})();