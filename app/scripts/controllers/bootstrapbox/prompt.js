'use strict';

/**
 * @ngdoc function
 * @name criaReportSystemApp.controller:BootstrapboxPromptCtrl
 * @description
 * # BootstrapboxPromptCtrl
 * Controller of the criaReportSystemApp
 */
appModule.controller('BootstrapboxPromptCtrl', ['$scope','$modalInstance','promptInfo',function($scope,$modalInstance,promptInfo) {


        $scope.Value = promptInfo.Value;
        $scope.Title = promptInfo.Title;


        $scope.close = function() {
            if ($modalInstance != undefined)
                $modalInstance.dismiss('cancel');
        }
        $scope.confirm = function() {
            if ($modalInstance != undefined)
                $modalInstance.dismiss('ok');
        }

    }]);
