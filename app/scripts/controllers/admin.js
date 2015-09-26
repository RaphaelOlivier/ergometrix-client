'use strict';

var adminCtrl = angular.module('adminCtrl', []);

adminCtrl
    .controller('AdminBaseCtrl', ['$scope', '$rootScope', 'API.Boats', 'API.Rankings', '$location', 'AuthService',
        function($scope, $rootScope, Boats, Rankings, $location, Auth) {
            if(!(Auth.isAuthenticated())) {
                $location.path('/login');
            }
            $rootScope.pageActive = 'dashboard';
            $scope.displayResults = $rootScope.displayResults;
            $scope.checkInscription = $rootScope.checkInscription;
            $scope.nbBoats = Boats.count();
            $scope.switchDisplayResults = function() {
                Rankings.switchDisplay().$promise.then(function() {
                    $scope.displayResults.check = ($scope.displayResults.check == 0) && 1 || 0;
                });
            };
        }
    ])
;