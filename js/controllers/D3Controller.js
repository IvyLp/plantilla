(function(){
    'use strict';
    angular.module('plantilla')
        .controller('D3Controller',D3Ctrl);

    function D3Ctrl($scope,$location,Activities,NavigationProgress)
    {
        var vm = this;
        var userA = [];
        vm.title = Activities.activitie4().title;
        vm.items = Activities.activitie4();
        vm.options = ['A','B','C','D','E'];
        vm.cambiavalor = function(key,value)
        {
            userA[key] = value;
        };
        vm.validar = function()
        {

            var correctas = 0;
            for(var i in vm.items.answer)
            {
                if(userA[i] === vm.items.answer[i]) correctas++;
            }
            vm.acierto = !vm.acierto;
            if(correctas === 5)
            {
                vm.retro = 'rtacorrecta.png';
                vm.redirect = 'd';
                NavigationProgress.viewedD(2);
            }
            else
            {
                vm.retro = 'rtaincorrecta.png';
                vm.redirect = 'd3';
            }

        };
    }
})();