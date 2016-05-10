(function(){
    angular.module('plantilla')
    .controller('presentacionCtrl',PresentacionCtrl)
    .controller('homeCtrl',HomeCtrl)
    .controller('navigationCtrl',NavigationCtrl)
    .controller('aCtrl',ACtrl);

    function PresentacionCtrl($location)
    {
        /* jshint validthis: true */
        var vm = this; // Representa el Objeto $Scope cuando se generan controladores con Alias
        var section = angular.element(document.querySelector('section'));

        vm.abrirModal = function(estado)
        {
            vm.bool = estado;
            if(estado)
                section.addClass('filter');
            else
                section.removeClass('filter');
        };
        vm.go = function(path)
        {
            $location.path(path);
        }

    }

    function HomeCtrl($location)
    {
        var vm = this;

        vm.go = function(path)
        {
            $location.path(path);
        }
    }

    function NavigationCtrl($location)
    {
        var vm  = this;

        vm.go = function(path)
        {
            $location.path(path);
        }

    }

    function ACtrl()
    {
        var vm = this;
        vm.subtitulo = "¿Qué es la Gestión de Desempeño?";
    }

})();