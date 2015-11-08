'use strict';

/**
 * @ngdoc function
 * @name criaReportSystemApp.controller:BootstrapboxConfirmCtrl
 * @description
 * # BootstrapboxConfirmCtrl
 * Controller of the criaReportSystemApp
 */
appModule.controller('BootstrapboxConfirmCtrl', ['$scope', '$modalInstance', 'confirmInfo', function($scope, $modalInstance, confirmInfo) {
        $scope.Message = confirmInfo.Message;
        $scope.Title = confirmInfo.Title;

        $scope.close = function() {
            if ($modalInstance != undefined)
                $modalInstance.dismiss('cancel');
        }
        $scope.confirm = function() {
            if ($modalInstance != undefined)
                $modalInstance.dismiss('ok');
            confirmInfo.confirm();
        }
        
    }]);
