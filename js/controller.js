angular.module('plantilla')
    .controller('pCtrl',function($scope){
        $scope.abrirModal = function(estado)
        {
            $scope.bool = estado ;
        }
    })
    .controller('hCtrl',function($scope){

    });
