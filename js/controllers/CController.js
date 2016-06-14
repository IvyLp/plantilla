(function(){
    angular.module('plantilla')
        .controller('CController',CCtrl);

    function CCtrl($location,$rootScope,NavigationProgress)
    {
        var vm = this;
        NavigationProgress.viewed3();
        vm.progressC =  NavigationProgress.getProgress().c;
        vm.subtitulo = "Componentes de la gestión de desempeño";
        vm.instruction = 'html/instruction.html';
        vm.imgconcepto = "item_conceptos_gris.png";
        vm.imgvideo = "item_video_gris.png";
        vm.imgpractica = "item_practica_gris.png";

        $rootScope.clase = "section-bg3";
        vm.go = function(path)
        {
            $location.path(path);
        }
    }

})();