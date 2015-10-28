'use strict';

/**
 * @ngdoc function
 * @name willxiangApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * Controller of the willxiangApp
 */
// angular.module('willxiangApp').controller('TableCtrl', ['$scope',
//     function($scope) {

//         $scope.items = ['item1', 'item2', 'item3'];

//         $scope.dataSource = [{
//             FirstName: "Mark",
//             LastName: "Otto",
//             UserName: "@mdo"
//         }, {
//             FirstName: "Jacob",
//             LastName: "Thronton",
//             UserName: "@fat"
//         }, {
//             FirstName: "Larry",
//             LastName: "The Bird",
//             UserName: "@twitter"
//         }];





//     }
// ]);



angular.module('willxiangApp').controller('TableCtrl', function($scope, $uibModal, $log) {


    $scope.animationsEnabled = true;


    $scope.dataSource = [{
        Id: 1,
        FirstName: "Mark",
        LastName: "Otto",
        UserName: "@mdo"
    }, {
        Id: 2,
        FirstName: "Jacob",
        LastName: "Thronton",
        UserName: "@fat"
    }, {
        Id: 3,
        FirstName: "Larry",
        LastName: "The Bird",
        UserName: "@twitter"
    }];


    $scope.open = function(data) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            // size: size,
            resolve: {
                data: function() {
                    return data;
                }
            }
        });


        //uibModalInstance.close 触发时，回调这个方法
        modalInstance.result.then(function(data) {
            for (var i = 0; i < $scope.dataSource.length; i++) {
                if (data.Id === $scope.dataSource[i].Id) {
                    $scope.dataSource[i] = data;
                    break;
                }
            };
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };



    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };



});


angular.module('willxiangApp').controller('ModalInstanceCtrl', function($scope, $uibModalInstance, data) {

    $scope.data = 
    {
        Id: data.Id,
        FirstName: data.FirstName,
        LastName: data.LastName,
        UserName: data.UserName
    }

    $scope.ok = function() {
        $uibModalInstance.close($scope.data);
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});
