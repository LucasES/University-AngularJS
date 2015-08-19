(function () {

    var app = angular.module('Controller');

    app.controller('turmasCtrl', function ($scope, $http) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;
            //console.log($scope.turmas);
        });
    });

    app.controller('AlunoDetails', function ($scope, $routeParams) {
        $http.get("http://localhost:9090/")
        .success(function (response) {
            $scope.turmas = response;
            console.log($scope.turmas);
        });
    });




})();