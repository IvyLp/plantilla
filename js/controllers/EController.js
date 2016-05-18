(function(){
    angular.module('plantilla')
        .controller('EController',ECtrl);

    function ECtrl($location)
    {
        var vm = this;
        vm.subtitulo = "Componentes de la gestión de desempeño";
        vm.go = function(path)
        {
            $location.path(path);
        }
    }

})();