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
                vm.mensaje = 'Respuesta Correcta, "Felicitaciones"';
            else
                vm.mensaje = 'Respuesta Incorrecta, "Intenta Otra Véz"';
        };

        /*
        var vm = this;
        vm.concept = Activities.activitie4().concept;
        vm.definition = Activities.activitie4().definition;
        var array =['0','0','0','0','0'];
        var complete = 0;
        vm.almacenar = function(pindex,index)
        {
            array[pindex] = index;
        }
        vm.validar = function()
        {
            var aciertos = 0;
            for(var i in Activities.activitie4().answer)
            {
                if(Activities.activitie4().answer[i] == array[i]){
                    aciertos++;
                    continue;
                }
                else
                    break;
            }
            if(aciertos == 5)
                alert('Ejercicio Correcto');
            else
                alert("Ejercicio Incorrecto");

        }
        */
    }
})();