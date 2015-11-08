'use strict';

/**
 * @ngdoc service
 * @name criaReportSystemApp.bootstrapbox
 * @description
 * # bootstrapbox
 * Service in the criaReportSystemApp.
 */
appModule.service('bootstrapbox', ['$modal', function($modal) {

    function bootstrapbox() {};

    bootstrapbox.prototype.alert = function(alertInfo) {
        var $modalInstance = $modal.open({
            backdrop: 'static',
            templateUrl: 'views/bootstrapbox/alert.html',
            controller: 'BootstrapboxAlertCtrl',
            resolve: {
                alertInfo: function() {
                    return alertInfo;
                }
            }
        });
        $modalInstance.result.then(function() {}, function() {});
    };
    bootstrapbox.prototype.confirm = function(confirmInfo) {

        var modalInstance = $modal.open({
            backdrop: 'static',
            templateUrl: 'views/bootstrapbox/confirm.html',
            controller: 'BootstrapboxConfirmCtrl',
            resolve: {
                confirmInfo: function() {
                    return confirmInfo;
                }
            }
        });
        modalInstance.result.then(function() {}, function() {});

    };
    bootstrapbox.prototype.prompt = function(promptInfo) {
        var $modalInstance = $modal.open({
            backdrop: 'static',
            templateUrl: 'views/bootstrapbox/prompt.html',
            controller:'BootstrapboxPromptCtrl',
            resolve:{
                 promptInfo: function() {
                    return promptInfo;
                }
            }
        });
        $modalInstance.result.then(function() {}, function() {});
    };
    return new bootstrapbox();
}]);

appModule.controller('bootstrapbox')
