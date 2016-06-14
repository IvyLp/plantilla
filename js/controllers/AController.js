(function(){
    angular.module('plantilla')
        .controller('AController',ACtrl);

    function ACtrl($location,$rootScope,NavigationProgress)
    {
        var vm = this;
        NavigationProgress.viewed1();
        vm.progressA =  NavigationProgress.getProgress().a;
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