/**
 * Created by lx on 2017/1/4.
 * 个人中心我的积分页面
 */
angular.module('myApp.myCredit',['ionic']).config(['$stateProvider',function ($stateProvider) {
      $stateProvider.state('tabs.myCredit',{

           url:'/myCredit',
            views:{
               'tabs-personal':{
                   templateUrl:'myCredit.html',
                   controller:'myCreditController'
               }
            }
      })
}]).controller('myCreditController',['$scope','HttpFactory','$ionicTabsDelegate',function ($scope,HttpFactory,$ionicTabsDelegate) {

        $scope.$on('$ionicView.beforeEnter',function () {
            $ionicTabsDelegate.showBar(false);
        });

    //
    // var url = 'http://114.112.94.166/sunny/wap/api/uintegral';
    // HttpFactory.getData(url).then(function (result) {
    //     console.log(result);
    // },function (err) {
    //     console.log(err);
    // });


}]);