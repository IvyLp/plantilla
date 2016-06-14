(function(){
    angular.module('plantilla')
        .controller('DController',DCtrl);

    function DCtrl($location,$rootScope,NavigationProgress)
    {
        var vm = this;
        NavigationProgress.viewed4();
        vm.progressD =  NavigationProgress.getProgress().d;
        vm.subtitulo = "Herramientas útiles";
        vm.instruction = 'html/instruction.html';
        vm.imgconcepto = "item_conceptos_gris.png";
        vm.imgvideo = "item_video_gris.png";
        vm.imgpractica = "item_practica_gris.png";

        $rootScope.clase = "section-bg4";

        vm.go = function(path)
        {
            $location.path(path);
        }
    }

})();