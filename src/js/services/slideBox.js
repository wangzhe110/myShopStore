
angular.module('myApp.slideBox',[]).directive('mySlideBox',[function () {
    return{
        restrict:"E",
        scope:{sourceArray:'='},
        templateUrl:'slideBox.html',
        controller:['$scope','$state','$ionicSlideBoxDelegate','$element','$timeout',function ($scope,$state,$ionicSlideBoxDelegate,$element,$timeout) {
            $scope.goToDetailView = function (index) {
                console.log('进入详情页' + index);
            };
            var lastSpan = $element[0].lastChild;
            $scope.$watch('sourceArray',function (newVal,oldVal) {
                if (newVal && newVal.length) {

                    $scope.isShowSlideBox = true;

                }

            });

        }],
        replace:true

    };
}]);