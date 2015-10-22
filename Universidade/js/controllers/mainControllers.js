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

    app.controller('DisciplinaDetails', function ($scope, $routeParams, $http) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;
            var turma;
            var temp = [];
            var alunos = [];
            for (var i = 0; i < $scope.turmas.length; i++) {
                if ($scope.turmas[i].id == $routeParams.turmaId) {
                    turma = $scope.turmas[i];
                    break;
                }
            }
            for (var x = 0; x < turma.prof_turma.professor.length; x++) {
                $scope.turma = $scope.turmas[i];
                for (var z = 0; z < turma.prof_turma.professor[x].cadeiras.disciplina.length; z++) {
                    if (turma.prof_turma.professor[x].cadeiras.disciplina[z].id == $routeParams.idDisciplina) {
                        temp.push(turma.prof_turma.professor[x]);
                        //console.log(turma.prof_turma.professor[x]);
                        //$scope.professores.push(turma.prof_turma.professor[x]);
                        $scope.disciplina = turma.prof_turma.professor[x].cadeiras.disciplina[z]
                    }
                }
                
            }
            for (var x = 0; x < turma.aluno_turma.aluno.length; x++) {
                for (var z = 0; z < turma.aluno_turma.aluno[x].aluno_semestre.cadeiras.disciplina.length; z++) {
                    if (turma.aluno_turma.aluno[x].aluno_semestre.cadeiras.disciplina[z].id == $routeParams.idDisciplina) {
                        alunos.push(turma.aluno_turma.aluno[x]);
                        //console.log(turma.aluno_turma.aluno[x]);
                    }
                }
            }
            $scope.alunos = alunos;
            $scope.professores = temp;
            console.log($scope.turma);
            //console.log($scope.alunos[0].nome);
        });
    });

    app.controller('AlunoDetails', function ($scope, $routeParams, $http) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;
            for (var i = 0; i < $scope.turmas.length; i++) {
                $scope.turma = $scope.turmas[i];
                for (var x = 0; x < $scope.turmas[i].aluno_turma.aluno.length; x++) {
                    if ($scope.turmas[i].id == $routeParams.turmaId && $scope.turmas[i].aluno_turma.aluno[x].id_aluno == $routeParams.alunoId) {
                        $scope.aluno = $scope.turmas[i].aluno_turma.aluno[x];
                        //console.log($scope.aluno);
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
                        $scope.turma = $scope.turmas[i];
                        $scope.professor = $scope.turmas[i].prof_turma.professor[x];
                        //console.log($scope.turma.id);

                    }
                }
            }

        });
    });
})();