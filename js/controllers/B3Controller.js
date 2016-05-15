(function(){
    'use strict';
    angular.module('plantilla')
        .controller('B3Controller',B3Ctrl);

    function B3Ctrl($location,Activities)
    {

        var vm = this;
        vm.title = Activities.activitie1().title;
        vm.items = Activities.activitie1().items;
        vm.validar = function(key){

            console.log(Activities.activitie1().answer +" "+key);
            if(Activities.activitie1().answer == parseInt(key))
                vm.acierto = !vm.acierto;
            else
                alert("Respuesta Incorrecta")

        };
    }
})();