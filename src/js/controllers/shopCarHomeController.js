/**
 * Created by lx on 2016/12/29.
 */
angular.module('myApp.shopCarHome',['ionic']).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.shopCarHome',{
        url:'/shopCarHome',
        views:{
            'tabs-personal':{
                templateUrl:'shoppingCarHome.html',
                controller:'shopCarHomeController'
            }
        }
    })

}]).controller('shopCarHomeController',['$scope','$ionicTabsDelegate',function ($scope,$ionicTabsDelegate) {
    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(false);
    });
       $scope.shopCarHome = {
           hasClass:'全部',
           hasClassOne:'选中',
           changeState:changeState,
           changeStateOne:changeStateOne
       };
      function changeState() {
          if($scope.shopCarHome.hasClass=='全部'){
              $scope.shopCarHome.hasClass='';
          }else{
              $scope.shopCarHome.hasClass='全部';
          }

      }
    function changeStateOne() {

        if ($scope.shopCarHome.hasClassOne == '选中') {
            $scope.shopCarHome.hasClassOne = '';
            console.log('取消选中')
            $scope.shopCarHome.hasClass='';
        } else {
            $scope.shopCarHome.hasClassOne = '选中';
            console.log('选中')
        }
    }
}]);