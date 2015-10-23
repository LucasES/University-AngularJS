(function () {

    var app = angular.module('Controller');

    app.controller('turmasCtrl', function ($scope, $http) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;

            //console.log($scope.turmas);
        });
    });

    app.controller('TurmaDetails', function ($scope, $routeParams, $http) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;
            for (var i = 0; i < $scope.turmas.length; i++) {
                if ($scope.turmas[i].id == $routeParams.turmaId) {
                    $scope.turma = $scope.turmas[i];
                    //console.log($scope.turma);
                }
            }
        });
    });

})();