
/**
 * Created by lx on 2017/1/4.
 * 收货地址页面
 */
angular.module('myApp.myAddress',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.myAddress',{

        url:'/myAddress',
        views:{
            'tabs-personal':{
                templateUrl:'myAddress.html',
                controller:'myAddressController'
            }
        }
    })
}]).controller('myAddressController',['$scope','$ionicTabsDelegate',function ($scope,$ionicTabsDelegate) {

    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(false);
    });
        $scope.address ={
            changeIconGray:changeIconGray,
            changeIconRed:changeIconRed,
           tubiao:'未选中'
        };

       function changeIconGray(e) {
           $scope.address.tubiao = '选中';

           }
      function changeIconRed(e) {

          $scope.address.tubiao = '未选中';

        }




}]);