(function () {
    var app = angular.module('rotas', []);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'partials/university.html',
                controller: 'turmasCtrl'
            })
            .when("/descTurma", {
                templateUrl: 'partials/descricao-turma.html',
                controller: 'turmasCtrl'
            })
            .when("/alunosTurma", {
                templateUrl: 'partials/alunos-turma.html',
                controller: 'turmasCtrl'
            })
              .when("/dadosAluno", {
                  templateUrl: 'partials/dados-aluno.html',
                  controller: 'AlunoDetails'
              })
            .otherwise({
                redirectTo: "/"
            });            
    });
})();