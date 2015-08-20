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
                    console.log($scope.turma);
                }
            }
        });
    });

    app.controller('AlunoDetails', function ($scope, $routeParams, $http) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;
            for (var i = 0; i < $scope.turmas.length; i++) {
                for (var x = 0; x < $scope.turmas[i].aluno_turma.aluno.length; x++) {
                    if ($scope.turmas[i].id == $routeParams.turmaId && $scope.turmas[i].aluno_turma.aluno[x].id_aluno == $routeParams.alunoId) {
                        $scope.aluno = $scope.turmas[i].aluno_turma.aluno[x];
                        console.log($scope.aluno);
                    }
                }
            }
        });
    });

    app.controller('ProfessorDetails', function ($scope, $routeParams, $http) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;
            for (var i = 0; i < $scope.turmas.length; i++) {
                for (var x = 0; x < $scope.turmas[i].prof_turma.professor.length; x++) {
                    if ($scope.turmas[i].id == $routeParams.turmaId && $scope.turmas[i].prof_turma.professor[x].id == $routeParams.professorId) {
                        $scope.professor = $scope.turmas[i].prof_turma.professor[x];
                    }
                }
            }
        });
    });
})();