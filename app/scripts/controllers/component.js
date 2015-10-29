'use strict';

/**
 * @ngdoc function
 * @name willxiangApp.controller:ComponentCtrl
 * @description
 * # ComponentCtrl
 * Controller of the willxiangApp
 */
angular.module('willxiangApp').controller('ComponentCtrl',
    function($scope, $window) {


        $scope.tabSelected = function() {
            $window.setTimeout(function() { //使用延迟的效果是，tab切换过来后才会弹出。不使用的效果可以自行修改尝试。
                alert("你选择了Alert!");
            });

        }


        /** Alert提示框代码 **/
        $scope.alerts = [{
            type: 'danger',
            msg: 'Oh snap! Change a few things up and try submitting again.'
        }, {
            type: 'success',
            msg: 'Well done! You successfully read this important alert message.'
        }];

        var alertCount = 1;
        $scope.addAlert = function() {
            $scope.alerts.push({
                type: 'info',
                msg: 'Another alert!+' + alertCount
            });
            alertCount++;
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
        /** Alert提示框代码 **/



    }
);

/*分页*/
function pagination(data,pageSize,currentPage,totalCount)
{
    var start = (currentPage-1)*pageSize;
    var newData = [];
    if(start+pageSize<=totalCount)
    {
        for (var i = start; i < start+pageSize; i++) {
            newData.push(data[i]);
        };
    }
    else
    {
        if(currentPage===1)
        {
            for (var i = 0; i < totalCount; i++)
            {
                newData.push(data[i]);
            }
        }
        else
        {
            for (var i = start; i < totalCount; i++) {
                newData.push(data[i]);
            };
        }
    }
    return newData;
}


/*模态窗口，表格控制器*/
angular.module('willxiangApp').controller('ModalTableCtrl', function($scope, $uibModal) {

    //数据源
     var dataList  = [{        Id: 1,        FirstName: "Mark1",        LastName: "Otto1",        UserName: "@mdo1"    }, {        Id: 2,        FirstName: "Mark2",        LastName: "Otto2",        UserName: "@mdo2"    }, {        Id: 3,        FirstName: "Mark3",        LastName: "Otto3",        UserName: "@mdo3"    }, {        Id: 4,        FirstName: "Mark4",        LastName: "Otto4",        UserName: "@mdo4"    }, {        Id: 5,        FirstName: "Mark5",        LastName: "Otto5",        UserName: "@mdo5"    }, {        Id: 6,        FirstName: "Mark6",        LastName: "Otto6",        UserName: "@mdo6"    }, {        Id: 7,        FirstName: "Mark7",        LastName: "Otto7",        UserName: "@mdo7"    }, {        Id: 8,        FirstName: "Mark8",        LastName: "Otto8",        UserName: "@mdo8"    }, {        Id: 9,        FirstName: "Mark9",        LastName: "Otto9",        UserName: "@mdo9"    }, {        Id: 10,        FirstName: "Mark10",        LastName: "Otto10",        UserName: "@mdo10"    }, {        Id: 11,        FirstName: "Mark11",        LastName: "Otto11",        UserName: "@mdo11"    }, {        Id: 12,        FirstName: "Mark12",        LastName: "Otto12",        UserName: "@mdo12"    }, {        Id: 13,        FirstName: "Mark13",        LastName: "Otto13",        UserName: "@mdo13"    }, {        Id: 14,        FirstName: "Mark14",        LastName: "Otto14",        UserName: "@mdo14"    }, {        Id: 15,        FirstName: "Mark15",        LastName: "Otto15",        UserName: "@mdo15"    }, {        Id: 16,        FirstName: "Mark16",        LastName: "Otto16",        UserName: "@mdo16"    }, {        Id: 17,        FirstName: "Mark17",        LastName: "Otto17",        UserName: "@mdo17"    }, {        Id: 18,        FirstName: "Mark18",        LastName: "Otto18",        UserName: "@mdo18"    }, {        Id: 19,        FirstName: "Mark19",        LastName: "Otto19",        UserName: "@mdo19"    }, {        Id: 20,        FirstName: "Mark20",        LastName: "Otto20",        UserName: "@mdo20"    }, {        Id: 21,        FirstName: "Mark21",        LastName: "Otto21",        UserName: "@mdo21"    }, {        Id: 22,        FirstName: "Mark22",        LastName: "Otto22",        UserName: "@mdo22"    }, {        Id: 23,        FirstName: "Mark23",        LastName: "Otto23",        UserName: "@mdo23"    }, {        Id: 24,        FirstName: "Mark24",        LastName: "Otto24",        UserName: "@mdo24"    }, {        Id: 25,        FirstName: "Mark25",        LastName: "Otto25",        UserName: "@mdo25"    }, {        Id: 26,        FirstName: "Mark26",        LastName: "Otto26",        UserName: "@mdo26"    }, {        Id: 27,        FirstName: "Mark27",        LastName: "Otto27",        UserName: "@mdo27"    }, {        Id: 28,        FirstName: "Mark28",        LastName: "Otto28",        UserName: "@mdo28"    }, {        Id: 29,        FirstName: "Mark29",        LastName: "Otto29",        UserName: "@mdo29"    }, {        Id: 30,        FirstName: "Mark30",        LastName: "Otto30",        UserName: "@mdo30"    }, {        Id: 31,        FirstName: "Mark31",        LastName: "Otto31",        UserName: "@mdo31"    }, {        Id: 32,        FirstName: "Mark32",        LastName: "Otto32",        UserName: "@mdo32"    }, {        Id: 33,        FirstName: "Mark33",        LastName: "Otto33",        UserName: "@mdo33"    }, {        Id: 34,        FirstName: "Mark34",        LastName: "Otto34",        UserName: "@mdo34"    }, {        Id: 35,        FirstName: "Mark35",        LastName: "Otto35",        UserName: "@mdo35"    }, {        Id: 36,        FirstName: "Mark36",        LastName: "Otto36",        UserName: "@mdo36"    }, {        Id: 37,        FirstName: "Mark37",        LastName: "Otto37",        UserName: "@mdo37"    }, {        Id: 38,        FirstName: "Mark38",        LastName: "Otto38",        UserName: "@mdo38"    }, {        Id: 39,        FirstName: "Mark39",        LastName: "Otto39",        UserName: "@mdo39"    }, {        Id: 40,        FirstName: "Mark40",        LastName: "Otto40",        UserName: "@mdo40"    }, {        Id: 41,        FirstName: "Mark41",        LastName: "Otto41",        UserName: "@mdo41"    }, {        Id: 42,        FirstName: "Mark42",        LastName: "Otto42",        UserName: "@mdo42"    }, {        Id: 43,        FirstName: "Mark43",        LastName: "Otto43",        UserName: "@mdo43"    }, {        Id: 44,        FirstName: "Mark44",        LastName: "Otto44",        UserName: "@mdo44"    }, {        Id: 45,        FirstName: "Mark45",        LastName: "Otto45",        UserName: "@mdo45"    }, {        Id: 46,        FirstName: "Mark46",        LastName: "Otto46",        UserName: "@mdo46"    }, {        Id: 47,        FirstName: "Mark47",        LastName: "Otto47",        UserName: "@mdo47"    }, {        Id: 48,        FirstName: "Mark48",        LastName: "Otto48",        UserName: "@mdo48"    }, {        Id: 49,        FirstName: "Mark49",        LastName: "Otto49",        UserName: "@mdo49"    }, {        Id: 50,        FirstName: "Mark50",        LastName: "Otto50",        UserName: "@mdo50"    }];


    /*分页相关代码*/
    $scope.currentPage = 1;
    $scope.pageSize =5;
    $scope.totalCount = dataList.length;
    $scope.dataSource = pagination(dataList,$scope.pageSize,$scope.currentPage,$scope.totalCount);
    $scope.pageChanged = function(){
        $scope.dataSource = pagination(dataList,$scope.pageSize,$scope.currentPage,$scope.totalCount);
    }

    /*分页相关代码*/


    $scope.open = function(data) {
        //此方法，为点击 编辑 按钮后，所做的操作，显示Modal
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
            console.log('Modal dismissed at: ' + new Date());
        });
    };



    $scope.toggleAnimation = function() {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };


});

/*与模态窗口控制器关联的控制器*/
angular.module('willxiangApp').controller('ModalInstanceCtrl', function($scope, $uibModalInstance, data) {

    $scope.data = {
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
