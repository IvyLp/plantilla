(function(){
    angular.module('plantilla')
        .controller('D1Controller',D1Ctrl);

    function D1Ctrl($location,ScrollToService)
    {
        var vm = this;
        vm.estado1 = true;
        vm.saltaSlide = function(eID)
        {
            switch (eID[2])
            {
                case 1:
                    vm.estado1 = true;
                    vm.estado2 = false;
                    vm.estado3 = false;
                    vm.estado4 = false;
                    vm.estado5 = false;
                    break;
                case 2:
                    vm.estado1 = false;
                    vm.estado2 = true;
                    vm.estado3 = false;
                    vm.estado4 = false;
                    vm.estado5 = false;
                    break;
                case 3:
                    vm.estado1 = false;
                    vm.estado2 = false;
                    vm.estado3 = true;
                    vm.estado4 = false;
                    vm.estado5 = false;
                    break;
                case 4:
                    vm.estado1 = false;
                    vm.estado2 = false;
                    vm.estado3 = false;
                    vm.estado4 = true;
                    vm.estado5 = false;
                    break;
                case 5:
                    vm.estado1 = false;
                    vm.estado2 = false;
                    vm.estado3 = false;
                    vm.estado4 = false;
                    vm.estado5 = true;
                    break;
            }
            vm.estado = false;
            ScrollToService.scrollTo(eID);
            vm.estado = true;
        }
    }


})();