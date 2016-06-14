(function(){
    'use strict';
    angular.module('plantilla')
        .controller('A3Controller',A3Ctrl);

    function A3Ctrl($location,Activities,NavigationProgress)
    {

        var vm = this;
        vm.title = Activities.activitie1().title;
        vm.items = Activities.activitie1().items;
        vm.mensaje = "";
        vm.validar = function(key){
            vm.acierto = !vm.acierto;
            if(Activities.activitie1().answer == parseInt(key))
            {
                vm.retro = 'rtacorrecta.png';
                vm.redirect = 'a';
                NavigationProgress.viewedA(2);
            }
            else
            {
                vm.retro = 'rtaincorrecta.png';
                vm.redirect = 'a3';
            }
        };

    }
})();