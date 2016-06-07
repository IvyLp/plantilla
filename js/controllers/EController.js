(function(){
    angular.module('plantilla')
        .controller('EController',ECtrl);

    function ECtrl($location,$rootScope)
    {
        var vm = this;
        vm.subtitulo = "Cúales son las etapas de la gestión de Desempeño";
        vm.instruction = 'html/instruction.html';

        vm.imgconcepto = "item_conceptos_gris.png";
        vm.imgvideo = "item_video_gris.png";
        vm.imgpractica = "item_practica_gris.png";

        $rootScope.clase = "section-bg5";
        vm.go = function(path)
        {
            $location.path(path);
        }
    }

})();