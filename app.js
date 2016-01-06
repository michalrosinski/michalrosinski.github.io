angular.module('app', [])
    .controller('ArtsCtrl', function($scope, $http) {
        $scope.test = "dasf";
        $http.get('/images/_index.json')
            .success(function(data){
                $scope.arts = data;
            });
    });
