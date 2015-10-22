(function () {
    var app = angular.module('rotas', []);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'partials/university.html',
                controller: 'turmasCtrl'
            })
            .when("/disciplinas", {
                templateUrl: 'partials/disciplinas.html',
                controller: 'turmasCtrl'
            })
            .when("/descricaoTurmas/:turmaId", {
                templateUrl: 'partials/descricao-turma.html',
                controller: 'TurmaDetails'
            })
            .when("/alunosTurma", {
                templateUrl: 'partials/alunos-turma.html',
                controller: 'turmasCtrl'
            })
              .when("/dadosAluno/:turmaId/:alunoId", {
                  templateUrl: 'partials/dados-aluno.html',
                  controller: 'AlunoDetails'
              })
            .when("/dadosProfessor/:turmaId/:professorId", {
                templateUrl: 'partials/dados-professor.html',
                controller: 'ProfessorDetails'
            })
            .when("/dadosDisciplina/:turmaId/:idDisciplina", {
                templateUrl: 'partials/dados-disciplina.html',
                controller: 'DisciplinaDetails'
            })
            .otherwise({
                redirectTo: "/"
            });
    });
})();