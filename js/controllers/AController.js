(function(){
    angular.module('plantilla')
        .controller('AController',ACtrl);

    function ACtrl($location)
    {
        var vm = this;
        vm.subtitulo = "¿Qué es la Gestión de Desempeño?";
        vm.go = function(path)
        {
            $location.path(path);
        }
    }

})();