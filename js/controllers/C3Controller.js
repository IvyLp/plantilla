(function(){
    'use strict';
    angular.module('plantilla')
        .controller('C3Controller',C3Ctrl);

    function C3Ctrl($location,Activities)
    {

        var vm = this;
        vm.title = Activities.activitie3().title;
        vm.items = Activities.activitie3().items;
        vm.mensaje = "";
        vm.validar = function(key){
            vm.acierto = !vm.acierto;
            if(Activities.activitie3().answer == parseInt(key))
                vm.mensaje = 'Respuesta Correcta';
            else
                vm.mensaje = 'Respuesta Incorrecta';
        };

    }
})();