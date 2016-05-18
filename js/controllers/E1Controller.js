(function(){
    angular.module('plantilla')
        .controller('E1Controller',E1Ctrl);

    function E1Ctrl($location,ScrollToService)
    {
        var vm = this;
        vm.estado1 = true;
        vm.estado2 = false;
        vm.estado3 = false;
        vm.estado4 = false;
        vm.estado5 = false;
        vm.smart = function(estado)
        {
            switch (estado)
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
        }
    }


})();