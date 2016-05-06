(function(){
    angular.module('plantilla')
    .controller('presentacionCtrl',PresentacionCtrl)
    .controller('homeCtrl',HomeCtrl);

    function PresentacionCtrl()
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
        }
    }

    function HomeCtrl()
    {
        this.count=false;
    }

})();