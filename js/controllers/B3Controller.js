(function(){
    'use strict';
    angular.module('plantilla')
        .controller('B3Controller',B3Ctrl);

    function B3Ctrl($location,Activities)
    {

        var vm = this;
        vm.title = Activities.activitie2().title;
        vm.items = Activities.activitie2().items;
        vm.mensaje = "";
        vm.validar = function(key){
            vm.acierto = !vm.acierto;
            if(Activities.activitie2().answer == parseInt(key))
                vm.mensaje = 'Respuesta Correcta';
            else
                vm.mensaje = 'Respuesta Incorrecta';
        };

    }
})();