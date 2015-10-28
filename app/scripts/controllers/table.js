'use strict';

/**
 * @ngdoc function
 * @name willxiangApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * Controller of the willxiangApp
 */
angular.module('willxiangApp').controller('TableCtrl', ['$scope',
    function($scope) {

        $scope.dataSource = [{
            FirstName: "Mark",
            LastName: "Otto",
            UserName: "@mdo"
        }, {
            FirstName: "Jacob",
            LastName: "Thronton",
            UserName: "@fat"
        }, {
            FirstName: "Larry",
            LastName: "The Bird",
            UserName: "@twitter"
        }];

    }
]);
