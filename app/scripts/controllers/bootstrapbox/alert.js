'use strict';

/**
 * @ngdoc function
 * @name criaReportSystemApp.controller:BootstrapboxAlertCtrl
 * @description
 * # BootstrapboxAlertCtrl
 * Controller of the criaReportSystemApp
 */
appModule.controller('BootstrapboxAlertCtrl', ['$scope', '$modalInstance','alertInfo', function($scope, $modalInstance,alertInfo) {
    $scope.Message = alertInfo.Message;
    $scope.Title = alertInfo.Title;
    $scope.close = function() {
        if ($modalInstance != undefined)
            $modalInstance.dismiss('cancel');
    }
}]);
