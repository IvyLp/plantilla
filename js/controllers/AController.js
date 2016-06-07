(function(){
    angular.module('plantilla')
        .controller('AController',ACtrl);

    function ACtrl($location,$rootScope)
    {
        var vm = this;
        vm.subtitulo = "¿Qué es la Gestión de Desempeño?";
        vm.instruction = 'html/instruction.html';
        vm.imgconcepto = "item_conceptos_gris.png";
        vm.imgvideo = "item_video_gris.png";
        vm.imgpractica = "item_practica_gris.png";

        $rootScope.clase = "section-bg1";
        vm.go = function(path)
        {
            $location.path(path);
        }
    }

})();