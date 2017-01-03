/**
 * Created by lx on 2016/12/28.
 */
angular.module('myApp.order',[]).config(['$stateProvider',function ($stateProvider) {

       $stateProvider.state('tabs.order',{

             url:'/order',
           views:{
               'tabs-personal':{

                   templateUrl:'orderHome.html',
                   controller:'orderController'
               }
           }

       })


}]).controller('orderController',['$scope','$ionicTabsDelegate',function ($scope,$ionicTabsDelegate) {

    $scope.$on('$ionicView.beforeEnter',function () {
    $ionicTabsDelegate.showBar(false);
    });
     $scope.order ={
          goodsClass:'待付款'
      }


}]);