(function () {
    var app = angular.module('library-directives', []);


    app.directive('dadosTurma', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/turma/dados-turma.html'
        }
    })
    app.directive('filtrar', function () {
        return {
            restrict: 'AE',
            templateUrl: 'partials/filtrar/filtrar.html'
        }
    });
})();