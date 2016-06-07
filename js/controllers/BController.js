(function(){
    angular.module('plantilla')
        .controller('BController',BCtrl);

    function BCtrl($location,$rootScope)
    {
        var vm = this;
        vm.subtitulo = "¿Cúal es el rol del líder en la gestión de Desempeño?";
        vm.instruction = 'html/instruction.html';
        vm.imgconcepto = "item_conceptos_gris.png";
        vm.imgvideo = "item_video_gris.png";
        vm.imgpractica = "item_practica_gris.png";

        $rootScope.clase = "section-bg2";

        vm.go = function(path)
        {
            $location.path(path);
        }
    }

})();