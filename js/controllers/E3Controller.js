(function(){
    'use strict';
    angular.module('plantilla')
        .controller('E3Controller',E3Ctrl);

    function E3Ctrl($scope,$location,Activities)
    {
        var vm = this;
        var userA = [];
        vm.title = Activities.activitie5().title;

        vm.cambiarvalor = function()
        {
          userA[0] =  vm.select1;
          userA[1] =  vm.select2;
          userA[2] =  vm.select3;
          userA[3] =  vm.select4;
        };
        vm.validar = function()
        {
            var correctas = 0;
            for(var i in Activities.activitie5().answer)
            {
                if(userA[i] == Activities.activitie5().answer[i])
                    correctas++;
            }
            vm.acierto = !vm.acierto;
            if(correctas === 4)
                vm.mensaje = 'Respuesta Correcta';
            else
                vm.mensaje = 'Respuesta Incorrecta';
        }
    }
})();