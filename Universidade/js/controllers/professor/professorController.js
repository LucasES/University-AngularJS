(function () {

    var app = angular.module('Controller');

    app.controller('ProfessorDetails', function ($scope, $routeParams, $http) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;
            for (var i = 0; i < $scope.turmas.length; i++) {
                for (var x = 0; x < $scope.turmas[i].prof_turma.professor.length; x++) {
                    if ($scope.turmas[i].id == $routeParams.turmaId && $scope.turmas[i].prof_turma.professor[x].id == $routeParams.professorId) {
                        $scope.turma = $scope.turmas[i];
                        $scope.professor = $scope.turmas[i].prof_turma.professor[x];
                        //console.log($scope.turma.id);
                    }
                }
            }

        });
    });
})();