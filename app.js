angular.module('app', [])
    .controller('ArtsCtrl', function($scope, $http) {
        $scope.test = "dasf";
        $http.get('/images/index.json')
            .success(function(data){
                $scope.arts = data;
            });
    });
