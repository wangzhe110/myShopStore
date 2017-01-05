/**
 * Created by lx on 2017/1/4.
 */
/**
 * Created by lx on 2016/12/28.
 */
angular.module('myApp.payHistory',[]).config(['$stateProvider',function ($stateProvider) {

    $stateProvider.state('tabs.payHistory',{

        url:'/payHistory',
        views:{
            'tabs-personal':{

                templateUrl:'payHistory.html',
                controller:'payHistoryController'
            }
        }

    })


}]).controller('payHistoryController',['$scope','$ionicTabsDelegate',function ($scope,$ionicTabsDelegate) {

    $scope.$on('$ionicView.beforeEnter',function () {
        $ionicTabsDelegate.showBar(false);
    });



}]);