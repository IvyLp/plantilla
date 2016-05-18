(function(){
    angular.module('plantilla')
        .controller('DController',DCtrl);

    function DCtrl($location)
    {
        var vm = this;
        vm.subtitulo = "Componentes de la gestión de desempeño";
        vm.go = function(path)
        {
            $location.path(path);
        }
    }

})();