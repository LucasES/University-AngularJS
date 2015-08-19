(function () {
    var app = angular.module('library-directives', []);


    app.directive('dadosTurma', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/dados-turma.html'
        }
    })
    app.directive('filtrar', function () {
        return {
            restrict: 'AE',
            templateUrl: 'partials/filtrar.html'
        }
    });


})();