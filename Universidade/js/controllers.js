(function () {

    var app = angular.module('Controller');

    app.controller('turmasCtrl', function ($scope, $http) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;
            console.log($scope.turmas);
        });
    });

    //Esta errado
    app.controller('AlunoDetails', function ($scope, $routeParams, $http) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;
            for (var i = 0; i < $scope.turmas.length; i++) {
                if ($scope.turmas[i].id === $routeParams.turmaId) {
                    //$scope.aluno = $scope.turmas[$routeParams.turmaId].aluno_turma.aluno[$routeParams.alunoId];
                    console.log($scope.turmas[i]);
                }
            }
            
            //console.log($scope.aluno);
            //console.log($scope.turmas.length);

        });
    });
})();