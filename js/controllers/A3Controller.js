(function(){
    'use strict';
    angular.module('plantilla')
        .controller('A3Controller',A3Ctrl);

    function A3Ctrl($location,Activities)
    {

        var vm = this;
        vm.title = Activities.activitie1().title;
        vm.items = Activities.activitie1().items;
        vm.mensaje = "";
        vm.validar = function(key){
            vm.acierto = !vm.acierto;
            if(Activities.activitie1().answer == parseInt(key))
                vm.mensaje = 'Respuesta Correcta';
            else
                vm.mensaje = 'Respuesta Incorrecta';
        };

    }
})();