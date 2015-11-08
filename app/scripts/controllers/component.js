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
        $scope.alerts = [];

        $scope.alertCount = $scope.alerts.length;
        $scope.addAlert = function() {
            $scope.alerts.push({
                type: 'info',
                msg: 'Another alert!+' + $scope.alertCount
            });
            $scope.alertCount++;
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
            $scope.alertCount--;
        };
        /** Alert提示框代码 **/



    }
);

/*分页*/
function pagination(data, pageSize, currentPage, totalCount) {
    var start = (currentPage - 1) * pageSize;
    var newData = [];
    if (start + pageSize <= totalCount) {
        for (var i = start; i < start + pageSize; i++) {
            newData.push(data[i]);
        };
    } else {
        if (currentPage === 1) {
            for (var i = 0; i < totalCount; i++) {
                newData.push(data[i]);
            }
        } else {
            for (var i = start; i < totalCount; i++) {
                newData.push(data[i]);
            };
        }
    }
    return newData;
}


/*模态窗口，表格控制器*/
angular.module('willxiangApp').controller('ModalTableCtrl', function($scope, $uibModal, $http, bootstrapbox) {

    /*分页相关代码*/
    $scope.currentPage = 1; //初始化的当前页
    $scope.pageSize = 10; //每页显示数目
    $scope.totalCount = 0; //总数据量
    $scope.dataSource = []; //当前绑定数据量
    $scope.maxSize = 10; //最多显示多少页码

    getStudentList($scope.currentPage);


    /*翻页事件*/
    $scope.pageChanged = function() {
        // $scope.dataSource = pagination(dataList, $scope.pageSize, $scope.currentPage, $scope.totalCount);
        getStudentList($scope.currentPage);
    }


    function getStudentList(page) {
        $http.get("http://localhost:4246/Api/User/GetStudentList?page=" + page).success(function(data) {
            $scope.totalCount = data.AdditionData;
            $scope.dataSource = data.MainData;
        }).error(function(data) {
            console.log(data);
        });
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

            bootstrapbox.alert({
                Message:'操作成功',
                Title:'提示'
            });

            return;

            //对信息进行更新
            var argument = {
                method: 'Post',
                url: 'http://localhost:4246/Api/User/UpdateStudent',
                headers: {
                    'Content-Type': 'text/plain'
                },
                data: JSON.stringify(data)
            };

            $http(argument).success(function(data) {
                console.log(data);
            }).error(function(data) {
                console.log(data);
            });


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

    $scope.data = data;

    $scope.ok = function() {
        $uibModalInstance.close($scope.data);
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});




angular.module('willxiangApp').controller('TypeaheadCtrl', function($scope, $http) {
    $scope.selected = undefined;
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
        return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: val,
                sensor: false
            }
        }).then(function(response) {
            return response.data.results.map(function(item) {
                console.log(response.data.results);
                return item.formatted_address;
            });
        });
    };


    $scope.getWeather = function(val) {
        return $http.get('//api.heweather.com/x3/weather', {
            params: {
                city: val,
                key: "6a7d5f6938da427fbb17219e1461e4e4"
            }
        }).then(function(response) {
            if (response.status === 200) {
                var weather = response.data["HeWeather data service 3.0"]
                if (weather[0].status === "ok") {
                    var city = weather[0].basic.city;
                    var cnty = weather[0].basic.cnty;
                    var time = weather[0].basic.update.loc;
                    var cond = weather[0].daily_forecast[0].cond.txt_d;
                    var min = weather[0].daily_forecast[0].tmp.min;
                    var max = weather[0].daily_forecast[0].tmp.max;
                    var wind = weather[0].daily_forecast[0].wind.sc;
                    return [cnty, city, cond, min + "℃~" + max + "℃", wind, time];
                } else {
                    return [weather[0].status + ""];
                }
            } else {
                return ["Not Found"];
            }
        });

    };




});


//日期选择
angular.module('willxiangApp').controller('DataPickerCtrl', function($scope) {
    $scope.formats = ['yyyy-MM-dd', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.status = {
        opened: false
    };
    $scope.open = function($event) {
        $scope.status.opened = true;
    };



});
