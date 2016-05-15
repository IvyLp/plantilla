(function(){
    angular.module('plantilla')
        .controller('BController',BCtrl);

    function BCtrl($location)
    {
        var vm = this;
        vm.subtitulo = "¿Cúal es el rol del líder en la gestión de Desempeño?";
        vm.go = function(path)
        {
            $location.path(path);
        }
    }

})();