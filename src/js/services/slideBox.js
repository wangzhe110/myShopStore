
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
                    // }
                    /*
                     * 两种方案解决轮播不能立刻显示或者错位的bug 改bug 由于 ng-repeat和slideBox 的特性造成
                     * 完美的解决方案是使用添加ng-if 另一种使用update和loop
                     * */
                    // $ionicSlideBoxDelegate.$getByHandle('topCarouselSlideBox').update();

                    // $ionicSlideBoxDelegate.$getByHandle('topCarouselSlideBox').loop(true);
                    // if (oldVal && oldVal.length && oldVal.length != newVal.length) {
                    //     $scope.isShowSlideBox = false;
                    //     $timeout(function () {
                    //         $scope.isShowSlideBox = true;
                    //     }, 10)
                    // } else {
                    //     $scope.isShowSlideBox = true;
                    //
                    // }

                        lastSpan.innerText = ($scope.sourceArray[0]).title;



                }
                // //页面加载的出来的时候禁止滑动
                // $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
                // //拖拽轮播图的时候也要禁止 底层的slideBox滑动
                // $scope.drag = function (event) {
                //     $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
                //     // console.log('拖拽轮播图')
                //   event.stopPropagation();
                // };

                $scope.slideHasChanged = function (index) {
                    lastSpan.innerText = $scope.sourceArray[index].title;
                    if($scope.sourceArray[index].title){
                        lastSpan.innerText = ($scope.sourceArray[index]).title;
                    }else{
                        lastSpan.innerText = ($scope.sourceArray[index]).roomName;
                    }

                }
            });

        }],
        replace:true,

    };
}]);