(function(){
    angular.module('plantilla')
        .controller('CController',CCtrl);

    function CCtrl($location)
    {
        var vm = this;
        vm.subtitulo = "Componentes de la gestión de desempeño";
        vm.go = function(path)
        {
            $location.path(path);
        }
    }

})();