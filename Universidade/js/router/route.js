(function () {
    var app = angular.module('rotas', []);

    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
                templateUrl: 'partials/university.html',
                controller: 'turmasCtrl'
            })
            .when("/disciplinas", {
                templateUrl: 'partials/disciplina/disciplinas.html',
                controller: 'turmasCtrl'
            })
            .when("/descricaoTurmas/:turmaId", {
                templateUrl: 'partials/turma/descricao-turma.html',
                controller: 'TurmaDetails'
            })
            .when("/alunosTurma", {
                templateUrl: 'partials/aluno/alunos-turma.html',
                controller: 'turmasCtrl'
            })
              .when("/dadosAluno/:turmaId/:alunoId", {
                  templateUrl: 'partials/aluno/dados-aluno.html',
                  controller: 'AlunoDetails'
              })
            .when("/dadosProfessor/:turmaId/:professorId", {
                templateUrl: 'partials/professor/dados-professor.html',
                controller: 'ProfessorDetails'
            })
            .when("/dadosDisciplina/:turmaId/:idDisciplina", {
                templateUrl: 'partials/disciplina/dados-disciplina.html',
                controller: 'DisciplinaDetails'
            })
            .otherwise({
                redirectTo: "/"
            });
    });
})();